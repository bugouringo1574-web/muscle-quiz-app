// 筋肉・骨格マスター アプリケーションロジック（全4テーマ対応・スマホ最適化）

class MasterApp {
  constructor() {
    this.themes = APP_THEMES;
    this.currentThemeIndex = 0;
    this.currentMode = 'encyclopedia'; // 'encyclopedia' | 'quiz' | 'tapquiz'
    this.selectedItem = null;
    this.isMaskActive = false;
    this.memorizedIds = new Set(JSON.parse(localStorage.getItem('memorized_items') || '[]'));

    // クイズ用状態
    this.quizQueue = [];
    this.quizIndex = 0;
    this.quizScore = 0;
    this.quizCombo = 0;
    this.isAnswered = false;

    // タップクイズ用状態
    this.tapTargetItem = null;

    // ローカルIP（同一Wi-Fiスマホ接続用）
    this.localIp = "192.168.10.111";
    this.serverPort = "8085";

    this.initDOM();
    this.bindEvents();
    this.renderThemeTabs();
    this.loadTheme(0);
    this.initQRCode();
  }

  getCurrentTheme() {
    return this.themes[this.currentThemeIndex];
  }

  initDOM() {
    this.dom = {
      themeTabs: document.getElementById('themeTabs'),
      diagramContainer: document.getElementById('diagramContainer'),
      diagramImage: document.getElementById('diagramImage'),
      maskContainer: document.getElementById('maskContainer'),
      pinLayer: document.getElementById('pinLayer'),

      modeTabs: document.querySelectorAll('.mode-tab-btn'),
      maskToggleBtn: document.getElementById('maskToggleBtn'),
      soundToggleBtn: document.getElementById('soundToggleBtn'),
      mobileConnectBtn: document.getElementById('mobileConnectBtn'),

      // 図鑑DOM
      encyclopediaView: document.getElementById('encyclopediaView'),
      encycloCategoryBadge: document.getElementById('encycloCategoryBadge'),
      encycloName: document.getElementById('encycloName'),
      encycloHint: document.getElementById('encycloHint'),
      encycloShortDesc: document.getElementById('encycloShortDesc'),
      encycloDetail: document.getElementById('encycloDetail'),
      encycloTextbook: document.getElementById('encycloTextbook'),
      encycloCheckBtn: document.getElementById('encycloCheckBtn'),
      memoProgressText: document.getElementById('memoProgressText'),

      // クイズDOM
      quizView: document.getElementById('quizView'),
      quizQNum: document.getElementById('quizQNum'),
      quizQTitle: document.getElementById('quizQTitle'),
      quizProgressFill: document.getElementById('quizProgressFill'),
      quizProgressText: document.getElementById('quizProgressText'),
      quizScoreText: document.getElementById('quizScoreText'),
      quizOptionsGrid: document.getElementById('quizOptionsGrid'),
      quizFeedback: document.getElementById('quizFeedback'),
      feedbackStatus: document.getElementById('feedbackStatus'),
      feedbackDetail: document.getElementById('feedbackDetail'),
      nextQBtn: document.getElementById('nextQBtn'),

      // タップクイズDOM
      tapQuizView: document.getElementById('tapQuizView'),
      tapQTitle: document.getElementById('tapQTitle'),
      tapQHint: document.getElementById('tapQHint'),
      tapProgressFill: document.getElementById('tapProgressFill'),
      tapProgressText: document.getElementById('tapProgressText'),
      tapFeedback: document.getElementById('tapFeedback'),
      tapFeedbackStatus: document.getElementById('tapFeedbackStatus'),
      tapFeedbackDetail: document.getElementById('tapFeedbackDetail'),
      tapNextQBtn: document.getElementById('tapNextQBtn'),

      // モーダル
      clearModal: document.getElementById('clearModal'),
      modalTitle: document.getElementById('modalTitle'),
      modalScore: document.getElementById('modalScore'),
      modalMsg: document.getElementById('modalMsg'),
      modalRetryBtn: document.getElementById('modalRetryBtn'),
      modalSwitchBtn: document.getElementById('modalSwitchBtn'),

      // スマホ連携モーダル
      qrModal: document.getElementById('qrModal'),
      qrContainer: document.getElementById('qrContainer'),
      qrUrlText: document.getElementById('qrUrlText'),
      qrCloseBtn: document.getElementById('qrCloseBtn')
    };
  }

  bindEvents() {
    // モード切替
    this.dom.modeTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        window.soundFX.playTap();
        const mode = btn.dataset.mode;
        this.switchMode(mode);
      });
    });

    // 暗記マスク切替
    this.dom.maskToggleBtn.addEventListener('click', () => {
      window.soundFX.playTap();
      this.setMaskActive(!this.isMaskActive);
    });

    // 音声ON/OFF
    this.dom.soundToggleBtn.addEventListener('click', () => {
      window.soundFX.enabled = !window.soundFX.enabled;
      this.dom.soundToggleBtn.classList.toggle('active', window.soundFX.enabled);
      this.dom.soundToggleBtn.querySelector('.btn-text').textContent = 
        window.soundFX.enabled ? '音：ON' : '音：OFF';
      if (window.soundFX.enabled) {
        window.soundFX.playTap();
      }
    });

    // スマホ接続モーダル開閉
    this.dom.mobileConnectBtn.addEventListener('click', () => {
      window.soundFX.playTap();
      this.dom.qrModal.classList.add('show');
    });
    this.dom.qrCloseBtn.addEventListener('click', () => {
      window.soundFX.playTap();
      this.dom.qrModal.classList.remove('show');
    });

    // 図鑑の「覚えた！」チェック
    this.dom.encycloCheckBtn.addEventListener('click', () => {
      if (!this.selectedItem) return;
      window.soundFX.playTap();
      const id = this.selectedItem.id;
      if (this.memorizedIds.has(id)) {
        this.memorizedIds.delete(id);
      } else {
        this.memorizedIds.add(id);
        window.soundFX.playCorrect();
      }
      localStorage.setItem('memorized_items', JSON.stringify([...this.memorizedIds]));
      this.updateCheckButtonState();
      this.updateProgressCounter();
    });

    // クイズの「つぎへ」ボタン
    this.dom.nextQBtn.addEventListener('click', () => {
      window.soundFX.playTap();
      this.quizIndex++;
      this.renderQuizQuestion();
    });

    // タップクイズの「つぎへ」ボタン
    this.dom.tapNextQBtn.addEventListener('click', () => {
      window.soundFX.playTap();
      this.quizIndex++;
      this.renderTapQuizQuestion();
    });

    // クリアモーダル
    this.dom.modalRetryBtn.addEventListener('click', () => {
      window.soundFX.playTap();
      this.dom.clearModal.classList.remove('show');
      if (this.currentMode === 'quiz') {
        this.startQuiz();
      } else if (this.currentMode === 'tapquiz') {
        this.startTapQuiz();
      }
    });

    this.dom.modalSwitchBtn.addEventListener('click', () => {
      window.soundFX.playTap();
      this.dom.clearModal.classList.remove('show');
      this.switchMode('encyclopedia');
    });
  }

  // テーマ選択タブ
  renderThemeTabs() {
    this.dom.themeTabs.innerHTML = '';
    this.themes.forEach((th, idx) => {
      const btn = document.createElement('button');
      btn.className = `theme-tab-btn ${idx === this.currentThemeIndex ? 'active' : ''}`;
      btn.innerHTML = `
        <span class="theme-icon">${th.icon}</span>
        <span class="theme-name">${th.name}</span>
        <span class="theme-badge">${th.items.length}問</span>
      `;
      btn.addEventListener('click', () => {
        if (this.currentThemeIndex === idx) return;
        window.soundFX.playTap();
        this.loadTheme(idx);
      });
      this.dom.themeTabs.appendChild(btn);
    });
  }

  // テーマ読み込み
  loadTheme(themeIndex) {
    this.currentThemeIndex = themeIndex;

    // タブの見た目更新
    document.querySelectorAll('.theme-tab-btn').forEach((b, idx) => {
      b.classList.toggle('active', idx === themeIndex);
    });

    const theme = this.getCurrentTheme();

    // 画像とアスペクト比
    this.dom.diagramImage.src = theme.image;
    this.dom.diagramContainer.style.aspectRatio = theme.aspectRatio;

    // マスク領域の再構築
    this.renderMasks(theme.masks);

    // ピンの再描画
    this.renderPins();

    // 最初のアイテムを選択（図鑑モード時）
    if (theme.items.length > 0) {
      this.selectItem(theme.items[0]);
    }

    // クイズ中ならリスタート
    if (this.currentMode === 'quiz') {
      this.startQuiz();
    } else if (this.currentMode === 'tapquiz') {
      this.startTapQuiz();
    }
  }

  // マスクの描画（クイズ時に文字を完全に隠す）
  renderMasks(maskData) {
    this.dom.maskContainer.innerHTML = '';
    maskData.forEach(m => {
      const el = document.createElement('div');
      el.className = 'theme-mask';
      if (m.top) el.style.top = m.top;
      if (m.bottom) el.style.bottom = m.bottom;
      if (m.left) el.style.left = m.left;
      if (m.right) el.style.right = m.right;
      el.style.width = m.width;
      el.style.height = m.height;
      el.innerHTML = '<span>🙈 ここは答え</span>';
      this.dom.maskContainer.appendChild(el);
    });

    // モードに応じたマスクのON/OFF
    this.applyMaskState();
  }

  setMaskActive(active) {
    this.isMaskActive = active;
    this.dom.maskToggleBtn.classList.toggle('active', active);
    this.dom.maskToggleBtn.querySelector('.btn-text').textContent = 
      active ? '文字をみせる' : '文字をかくす';
    this.applyMaskState();
  }

  applyMaskState() {
    // クイズまたはタップクイズ中は強制的にマスクON（文字を隠す）
    const shouldHide = this.isMaskActive || (this.currentMode !== 'encyclopedia');
    const masks = document.querySelectorAll('.theme-mask');
    masks.forEach(m => {
      m.classList.toggle('active', shouldHide);
    });
  }

  // ピンの描画
  renderPins() {
    this.dom.pinLayer.innerHTML = '';
    const theme = this.getCurrentTheme();

    theme.items.forEach(item => {
      const pin = document.createElement('div');
      pin.className = 'muscle-pin';
      pin.id = `pin-${item.id}`;
      pin.style.left = `${item.x}%`;
      pin.style.top = `${item.y}%`;
      pin.dataset.id = item.id;

      // ホバーツールチップ（図鑑モードのみ）
      const tooltip = document.createElement('div');
      tooltip.className = 'pin-tooltip';
      tooltip.innerHTML = `<ruby>${item.name}<rt>${item.kana}</rt></ruby>`;
      pin.appendChild(tooltip);

      pin.addEventListener('click', (e) => {
        e.stopPropagation();
        this.onPinClicked(item);
      });

      this.dom.pinLayer.appendChild(pin);
    });

    this.updateProgressCounter();
  }

  onPinClicked(item) {
    if (this.currentMode === 'encyclopedia') {
      window.soundFX.playTap();
      this.selectItem(item);
    } else if (this.currentMode === 'tapquiz') {
      this.handleTapQuizAnswer(item);
    }
  }

  selectItem(item) {
    this.selectedItem = item;

    document.querySelectorAll('.muscle-pin').forEach(p => p.classList.remove('selected'));
    const targetPin = document.getElementById(`pin-${item.id}`);
    if (targetPin) {
      targetPin.classList.add('selected');
    }

    this.dom.encycloCategoryBadge.textContent = item.categoryName;
    this.dom.encycloCategoryBadge.style.backgroundColor = item.categoryColor;
    this.dom.encycloName.innerHTML = `<ruby>${item.name}<rt>${item.kana}</rt></ruby>`;
    this.dom.encycloHint.textContent = item.hint;
    this.dom.encycloShortDesc.textContent = item.shortDesc;
    this.dom.encycloDetail.textContent = item.detail;
    this.dom.encycloTextbook.textContent = `教科書の解説：「${item.textbookNote}」`;

    this.updateCheckButtonState();
  }

  updateCheckButtonState() {
    if (!this.selectedItem) return;
    const isChecked = this.memorizedIds.has(this.selectedItem.id);
    this.dom.encycloCheckBtn.classList.toggle('checked', isChecked);
    this.dom.encycloCheckBtn.innerHTML = isChecked 
      ? '💮 覚えたよ！（チェック済）' 
      : '⚪ 覚えたらチェック！';
  }

  updateProgressCounter() {
    const theme = this.getCurrentTheme();
    const total = theme.items.length;
    const memorized = theme.items.filter(item => this.memorizedIds.has(item.id)).length;
    this.dom.memoProgressText.textContent = `覚えた数: ${memorized} / ${total} 個`;
  }

  // モード切替
  switchMode(mode) {
    this.currentMode = mode;
    this.dom.modeTabs.forEach(t => t.classList.toggle('active', t.dataset.mode === mode));

    this.dom.encyclopediaView.style.display = (mode === 'encyclopedia') ? 'block' : 'none';
    this.dom.quizView.style.display = (mode === 'quiz') ? 'flex' : 'none';
    this.dom.tapQuizView.style.display = (mode === 'tapquiz') ? 'flex' : 'none';

    // クイズ中はツールチップ（文字の答え）を隠す
    document.querySelectorAll('.pin-tooltip').forEach(tt => {
      tt.style.display = (mode === 'encyclopedia') ? 'block' : 'none';
    });

    // クイズ中は答えが見えないようマスクを自動適用
    this.applyMaskState();
    this.clearPinHighlights();

    if (mode === 'quiz') {
      this.startQuiz();
    } else if (mode === 'tapquiz') {
      this.startTapQuiz();
    } else {
      if (this.selectedItem) {
        this.selectItem(this.selectedItem);
      }
    }
  }

  clearPinHighlights() {
    document.querySelectorAll('.muscle-pin').forEach(p => {
      p.classList.remove('selected', 'highlight-target', 'correct-pin');
    });
  }

  // ==========================================
  // 4択クイズ
  // ==========================================
  startQuiz() {
    const theme = this.getCurrentTheme();
    if (theme.items.length === 0) return;

    this.quizQueue = [...theme.items].sort(() => Math.random() - 0.5);
    this.quizIndex = 0;
    this.quizScore = 0;
    this.quizCombo = 0;

    this.renderQuizQuestion();
  }

  renderQuizQuestion() {
    this.clearPinHighlights();
    this.isAnswered = false;
    this.dom.quizFeedback.classList.remove('show', 'is-correct', 'is-wrong');

    if (this.quizIndex >= this.quizQueue.length) {
      this.showQuizCompleteModal(this.quizScore, this.quizQueue.length);
      return;
    }

    const target = this.quizQueue[this.quizIndex];
    const total = this.quizQueue.length;

    const progressPct = (this.quizIndex / total) * 100;
    this.dom.quizProgressFill.style.width = `${progressPct}%`;
    this.dom.quizProgressText.textContent = `${this.quizIndex + 1} / ${total} 問`;
    this.dom.quizScoreText.textContent = `正解: ${this.quizScore}問`;

    // ターゲットピンをピカピカ光らせる
    const targetPin = document.getElementById(`pin-${target.id}`);
    if (targetPin) {
      targetPin.classList.add('highlight-target');
      // スマホでピンの位置が見えやすいようスムーズスクロール
      if (window.innerWidth < 768) {
        this.dom.diagramContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    this.dom.quizQNum.textContent = `第 ${this.quizIndex + 1} 問`;
    this.dom.quizQTitle.innerHTML = `ピカピカ赤く光っている場所の名前はなーんだ？`;

    // 選択肢（正解1 + ダミー3）
    const theme = this.getCurrentTheme();
    const otherCandidates = theme.items.filter(i => i.id !== target.id);
    const shuffledOthers = [...otherCandidates].sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [target, ...shuffledOthers].sort(() => Math.random() - 0.5);

    this.dom.quizOptionsGrid.innerHTML = '';
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.innerHTML = `<ruby>${opt.name}<rt>${opt.kana}</rt></ruby>`;

      btn.addEventListener('click', () => {
        this.handleQuizAnswer(opt, target, btn);
      });

      this.dom.quizOptionsGrid.appendChild(btn);
    });
  }

  handleQuizAnswer(selectedOption, target, btnElement) {
    if (this.isAnswered) return;
    this.isAnswered = true;

    const allBtns = this.dom.quizOptionsGrid.querySelectorAll('.quiz-option-btn');
    allBtns.forEach(b => b.disabled = true);

    const isCorrect = (selectedOption.id === target.id);

    if (isCorrect) {
      window.soundFX.playCorrect();
      this.quizScore++;
      this.quizCombo++;
      btnElement.classList.add('correct');

      this.dom.quizFeedback.className = 'quiz-feedback show is-correct';
      this.dom.feedbackStatus.innerHTML = `💮 せいかい！ すごい！`;
      this.dom.feedbackDetail.innerHTML = `
        <strong><ruby>${target.name}<rt>${target.kana}</rt></ruby></strong> だよ！<br>
        💡 <strong>おぼえ方：</strong>${target.hint}
      `;
    } else {
      window.soundFX.playWrong();
      this.quizCombo = 0;
      btnElement.classList.add('wrong');

      allBtns.forEach(b => {
        if (b.textContent.includes(target.name)) {
          b.classList.add('correct');
        }
      });

      this.dom.quizFeedback.className = 'quiz-feedback show is-wrong';
      this.dom.feedbackStatus.innerHTML = `✕ ざんねん！`;
      this.dom.feedbackDetail.innerHTML = `
        正解は <strong><ruby>${target.name}<rt>${target.kana}</rt></ruby></strong> でした！<br>
        💡 <strong>おぼえ方：</strong>${target.hint}
      `;
    }

    this.dom.nextQBtn.textContent = (this.quizIndex + 1 < this.quizQueue.length) ? 'つぎの問題へ 👉' : '結果をみる 🏆';
  }

  // ==========================================
  // タップクイズ
  // ==========================================
  startTapQuiz() {
    const theme = this.getCurrentTheme();
    if (theme.items.length === 0) return;

    this.quizQueue = [...theme.items].sort(() => Math.random() - 0.5);
    this.quizIndex = 0;
    this.quizScore = 0;
    this.renderTapQuizQuestion();
  }

  renderTapQuizQuestion() {
    this.clearPinHighlights();
    this.isAnswered = false;
    this.dom.tapFeedback.classList.remove('show', 'is-correct', 'is-wrong');

    if (this.quizIndex >= this.quizQueue.length) {
      this.showQuizCompleteModal(this.quizScore, this.quizQueue.length);
      return;
    }

    this.tapTargetItem = this.quizQueue[this.quizIndex];
    const total = this.quizQueue.length;

    const progressPct = (this.quizIndex / total) * 100;
    this.dom.tapProgressFill.style.width = `${progressPct}%`;
    this.dom.tapProgressText.textContent = `${this.quizIndex + 1} / ${total} 問`;

    this.dom.tapQTitle.innerHTML = `<ruby>${this.tapTargetItem.name}<rt>${this.tapTargetItem.kana}</rt></ruby> はどこ？`;
    this.dom.tapQHint.innerHTML = `👇 人体図のピン（○）をタップして答えてね！`;
  }

  handleTapQuizAnswer(clickedItem) {
    if (this.isAnswered) return;
    this.isAnswered = true;

    const target = this.tapTargetItem;
    const isCorrect = (clickedItem.id === target.id);

    const targetPin = document.getElementById(`pin-${target.id}`);

    if (isCorrect) {
      window.soundFX.playCorrect();
      this.quizScore++;
      if (targetPin) targetPin.classList.add('correct-pin');

      this.dom.tapFeedback.className = 'quiz-feedback show is-correct';
      this.dom.tapFeedbackStatus.innerHTML = `💮 だいせいかい！ ばっちり！`;
      this.dom.tapFeedbackDetail.innerHTML = `
        <strong><ruby>${target.name}<rt>${target.kana}</rt></ruby></strong> の場所をしっかり覚えたね！<br>
        💡 <strong>おぼえ方：</strong>${target.hint}
      `;
    } else {
      window.soundFX.playWrong();
      if (targetPin) targetPin.classList.add('highlight-target');

      this.dom.tapFeedback.className = 'quiz-feedback show is-wrong';
      this.dom.tapFeedbackStatus.innerHTML = `✕ ここは「${clickedItem.name}」だよ！`;
      this.dom.tapFeedbackDetail.innerHTML = `
        <strong><ruby>${target.name}<rt>${target.kana}</rt></ruby></strong> は赤くピカピカ光っている場所だよ！<br>
        💡 <strong>おぼえ方：</strong>${target.hint}
      `;
    }

    this.dom.tapNextQBtn.textContent = (this.quizIndex + 1 < this.quizQueue.length) ? 'つぎの問題へ 👉' : '結果をみる 🏆';
  }

  // ==========================================
  // モーダル & QRコード
  // ==========================================
  showQuizCompleteModal(score, total) {
    const isPerfect = (score === total);
    if (isPerfect) {
      window.soundFX.playFanfare();
      this.fireConfetti();
    } else {
      window.soundFX.playCorrect();
    }

    this.dom.modalTitle.textContent = isPerfect ? '🎊 パーフェクト達成！ 🎊' : 'よくがんばったね！';
    this.dom.modalScore.textContent = `${score} / ${total} 問 正解`;
    
    let msg = '';
    const pct = score / total;
    if (pct === 1.0) {
      msg = 'すごすぎる！満点合格！このテーマは完全にマスターしたね！💮';
    } else if (pct >= 0.7) {
      msg = 'おしい！あと少しで満点！まちがえたところを図鑑で復習してみよう！💪';
    } else {
      msg = 'ナイスファイト！図鑑でヒントを読みながらもう一回やってみよう！✨';
    }
    this.dom.modalMsg.textContent = msg;
    this.dom.clearModal.classList.add('show');
  }

  // スマホ用QRコード生成
  initQRCode() {
    const mobileUrl = `http://${this.localIp}:${this.serverPort}/`;
    this.dom.qrUrlText.textContent = mobileUrl;

    if (window.QRCode) {
      new QRCode(this.dom.qrContainer, {
        text: mobileUrl,
        width: 180,
        height: 180,
        colorDark: "#1e1b4b",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M
      });
    }
  }

  fireConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '2000';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6', '#eab308'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        w: Math.random() * 12 + 6,
        h: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 3,
        vy: Math.random() * 4 + 3,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10
      });
    }

    let frame = 0;
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.rotSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });

      frame++;
      if (frame < 180) {
        requestAnimationFrame(render);
      } else {
        canvas.remove();
      }
    }
    requestAnimationFrame(render);
  }
}

// 起動
document.addEventListener('DOMContentLoaded', () => {
  window.app = new MasterApp();
});
