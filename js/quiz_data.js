// 全学習テーマのマスターデータ定義（全5テーマ・計72問）
const APP_THEMES = [
  // ========================================================
  // 1. 筋肉（前面）
  // ========================================================
  {
    id: "muscle_front",
    name: "筋肉（前面）",
    icon: "🧍‍♂️",
    desc: "お腹や胸、太もも前側の主要な骨格筋（全18部位）",
    image: "assets/textbook_original.jpg",
    aspectRatio: "719 / 1024",
    masks: [
      { top: "5%", left: "0%", width: "32%", height: "42%" },    // 表情筋〜外腹斜筋
      { top: "58%", left: "0%", width: "32%", height: "18%" },   // 長内転筋〜縫工筋
      { top: "8%", right: "0%", width: "34%", height: "40%" },   // 胸鎖乳突筋〜腕
      { top: "55%", right: "0%", width: "34%", height: "38%" }   // 大腿四頭筋〜ヒラメ筋
    ],
    items: [
      {
        id: "frontalis",
        name: "前頭筋",
        kana: "ぜんとうきん",
        category: "head",
        categoryName: "あたま・くび",
        categoryColor: "#FF6B6B",
        x: 46.0, y: 11.2,
        shortDesc: "おでこの筋肉。眉毛を持ち上げて横じわを作るよ！",
        detail: "収縮すると額（おでこ）に横じわが生じます。びっくりした表情をするときに動くよ！",
        hint: "「前の頭の筋肉」と書くよ。おでこを触って眉毛を上げてみよう！",
        textbookNote: "収縮すると額に横じわが生じる。"
      },
      {
        id: "orbicularis_oculi",
        name: "眼輪筋",
        kana: "がんりんきん",
        category: "head",
        categoryName: "あたま・くび",
        categoryColor: "#FF6B6B",
        x: 43.5, y: 14.5,
        shortDesc: "目のまわりをぐるっと囲む筋肉。目をパチパチ閉じるよ！",
        detail: "目を取り巻くように輪っか状に走っており、上下のまぶたを近づけて目を閉じます。",
        hint: "「眼（目）の輪（わっか）の筋肉」だよ。ぎゅっと目をつぶると力が入るよ！",
        textbookNote: "目を取り巻くように走行しており、上下のまぶたを近づけ、目を閉じる。"
      },
      {
        id: "orbicularis_oris",
        name: "口輪筋",
        kana: "こうりんきん",
        category: "head",
        categoryName: "あたま・くび",
        categoryColor: "#FF6B6B",
        x: 46.2, y: 17.5,
        shortDesc: "口のまわりを囲む筋肉。口をすぼめたり閉じたりするよ！",
        detail: "口を取り巻くように輪っか状に走っており、口を閉じたり前に突き出したりします。",
        hint: "「口（くち）の輪（わっか）の筋肉」だよ。口を『う〜』の形にすぼめてみよう！",
        textbookNote: "口を取り巻くように走行しており、口を閉じる。"
      },
      {
        id: "sternocleidomastoid",
        name: "胸鎖乳突筋",
        kana: "きょうさにゅうとつきん",
        category: "head",
        categoryName: "あたま・くび",
        categoryColor: "#FF6B6B",
        x: 48.5, y: 20.8,
        shortDesc: "首の横にある太いスジ。首を横に向けたときに浮き出るよ！",
        detail: "側頸部（首の横）を前下方から後上方に走る筋。皮膚を透かして盛り上がりがはっきり見えます。",
        hint: "胸骨（きょう）・鎖骨（さ）・耳の後ろの乳様突起（にゅうとつ）を結ぶからこの長〜い名前！テスト頻出No.1！",
        textbookNote: "側頸部を前下方から後上方に走る筋。皮膚を透かして盛り上がりがみえる。"
      },
      {
        id: "trapezius_f",
        name: "僧帽筋",
        kana: "そうぼうきん",
        category: "chest_arm",
        categoryName: "むね・かた・うで",
        categoryColor: "#4D96FF",
        x: 52.8, y: 22.8,
        shortDesc: "首の後ろから肩・背中上部にある大きな筋肉！",
        detail: "首から肩、背中の中央まで広がる菱形の筋肉。肩甲骨を引き上げたり肩をすくめたりします。",
        hint: "形がお坊さん（僧侶）のかぶる頭巾（僧帽）に似ていることから名付けられたよ！",
        textbookNote: "肩をすくめたり、背中を引っ張ったりする大きな筋肉。"
      },
      {
        id: "deltoid_f",
        name: "三角筋",
        kana: "さんかくきん",
        category: "chest_arm",
        categoryName: "むね・かた・うで",
        categoryColor: "#4D96FF",
        x: 56.5, y: 26.5,
        shortDesc: "肩の丸みをつくっている筋肉。腕を横から持ち上げるよ！",
        detail: "肩の関節を覆う三角形の筋肉。肩の盛り上がりをつくっており、腕を横や前に上げる働きをします。",
        hint: "肩を上から見るときれいな「三角形」をしているよ！注射を打つ場所としても有名。",
        textbookNote: "肩の盛り上がりをつくっている筋。"
      },
      {
        id: "pectoralis_major",
        name: "大胸筋",
        kana: "だいきょうきん",
        category: "chest_arm",
        categoryName: "むね・かた・うで",
        categoryColor: "#4D96FF",
        x: 42.0, y: 28.5,
        shortDesc: "胸の前面に扇形に大きく広がるたくましい筋肉！",
        detail: "胸の前面を覆う強大な筋肉。腕を胸の前に引き寄せたり、腕立て伏せで力を発揮します。",
        hint: "「胸の大きな筋肉」で大胸筋！手と手を胸の前で押し合うとカチカチになるよ！",
        textbookNote: "胸に広がっている筋。"
      },
      {
        id: "serratus_anterior",
        name: "前鋸筋",
        kana: "ぜんきょきん",
        category: "chest_arm",
        categoryName: "むね・かた・うで",
        categoryColor: "#4D96FF",
        x: 40.5, y: 34.2,
        shortDesc: "わき腹のあばら骨にある、ノコギリの刃のようなギザギザ筋肉！",
        detail: "胸郭の側面（あばらの横）にある筋肉。肩甲骨を前に引っ張る働きがあり、パンチを打つときに強く働きます。",
        hint: "「鋸（のこぎり）」の刃のようにギザギザしているから前鋸筋！ボクサー筋とも呼ばれるよ。",
        textbookNote: "あばら骨の横でギザギザした形の筋。"
      },
      {
        id: "biceps_brachii",
        name: "上腕二頭筋",
        kana: "じょうわんにとうきん",
        category: "chest_arm",
        categoryName: "むね・かた・うで",
        categoryColor: "#4D96FF",
        x: 35.0, y: 33.5,
        shortDesc: "うでの力こぶ！ひじをグッと曲げると盛り上がるよ！",
        detail: "腕の前側にある筋肉。頭（始まり）が2つに分かれているので「二頭筋」。ひじを曲げる主役です。",
        hint: "力こぶといえばコレ！教科書にも手書きでメモが入っている大事な筋肉だよ！",
        textbookNote: "ひじを曲げるときに盛り上がる、おなじみの力こぶ。"
      },
      {
        id: "brachioradialis",
        name: "腕橈骨筋",
        kana: "わんとうこつきん",
        category: "chest_arm",
        categoryName: "むね・かた・うで",
        categoryColor: "#4D96FF",
        x: 58.5, y: 42.5,
        shortDesc: "ひじから前腕の親指側へと伸びる太い筋肉！",
        detail: "上腕骨から前腕の親指側の骨（橈骨：とうこつ）に付着する筋肉。ひじを曲げたりします。",
        hint: "「腕（わん）」と親指側の骨「橈骨（とうこつ）」を結ぶ筋肉！",
        textbookNote: "前腕の親指側にあるたくましい筋肉。"
      },
      {
        id: "flexor_carpi_radialis",
        name: "橈側手根屈筋",
        kana: "とうそくしゅこんくっきん",
        category: "chest_arm",
        categoryName: "むね・かた・うで",
        categoryColor: "#4D96FF",
        x: 56.8, y: 45.8,
        shortDesc: "手首を手のひら側にキュッと曲げる筋肉！",
        detail: "前腕の前側を走り、手首を手のひら側に曲げる（屈曲）筋肉です。親指側を通ります。",
        hint: "「橈側（親指側）＋手根（手首）＋屈筋（曲げる筋肉）」と分解すると覚えやすい！",
        textbookNote: "手首を手のひら側に曲げる（屈曲する）筋肉。"
      },
      {
        id: "rectus_abdominis",
        name: "腹直筋",
        kana: "ふくちょくきん",
        category: "core",
        categoryName: "おなか・こし",
        categoryColor: "#6BCB77",
        x: 46.5, y: 38.0,
        shortDesc: "お腹の正面にあるシックスパック！体を前に倒すよ！",
        detail: "腹部の前面で正中線の左右にある多腹筋。腱画によってブロック状に分かれています。",
        hint: "「お腹をまっすぐ（直）走る筋肉」！鍛えると板チョコのように割れて見えるよ！",
        textbookNote: "腹の前面で正中線の左右にある多腹筋。"
      },
      {
        id: "external_oblique_f",
        name: "外腹斜筋",
        kana: "がいふくしゃきん",
        category: "core",
        categoryName: "おなか・こし",
        categoryColor: "#6BCB77",
        x: 40.2, y: 40.2,
        shortDesc: "お腹の横側にある筋肉。体をねじったりくびれを作るよ！",
        detail: "側腹部の壁をつくっている筋肉。筋線維が斜め下（ポケットに手を入れる方向）に向かって走っています。",
        hint: "「外側（がい）でお腹を斜め（しゃ）に走る筋肉」！体を左右にひねると縮むよ！",
        textbookNote: "側腹部の壁をつくっている筋。"
      },
      {
        id: "adductor_longus",
        name: "長内転筋",
        kana: "ちょうないてんきん",
        category: "leg",
        categoryName: "あし",
        categoryColor: "#FFD93D",
        x: 43.5, y: 56.5,
        shortDesc: "太ももの内側にある筋肉。足を内側にキュッと閉じるよ！",
        detail: "恥骨から大腿骨の内側へ走る筋肉。開いた足を閉じたり股関節を曲げます。",
        hint: "「長く（長）足を内側に寄せる（内転）筋肉」！サッカーのインサイドキックで使うよ！",
        textbookNote: "太ももを内側に閉じる働きをする筋肉。"
      },
      {
        id: "sartorius",
        name: "縫工筋",
        kana: "ほうこうきん",
        category: "leg",
        categoryName: "あし",
        categoryColor: "#FFD93D",
        x: 40.8, y: 60.5,
        shortDesc: "人体で一番長いリボン状の筋肉！あぐらをかくときに動くよ！",
        detail: "骨盤から膝の内側へと斜めに長く走る筋肉。人体最長の筋肉です。",
        hint: "昔の仕立て屋さん（縫工）があぐらを組んで針仕事をしたことから名付けられたよ！",
        textbookNote: "腰から膝の内側へななめに走る、人体で最も長い筋肉。"
      },
      {
        id: "quadriceps_femoris",
        name: "大腿四頭筋",
        kana: "だいたいしとうきん",
        category: "leg",
        categoryName: "あし",
        categoryColor: "#FFD93D",
        x: 51.5, y: 62.5,
        shortDesc: "太ももの前にある体の中で一番大きくて力強い筋肉！",
        detail: "4つの筋肉の総称。ひざをピンと伸ばす強力な筋肉です。",
        hint: "頭が4つあるから「四頭筋」！そのうち1つ（中間広筋）は奥にあって見えないよ！",
        textbookNote: "4つある筋頭のうち1つは、表面から見えない。"
      },
      {
        id: "tibialis_anterior",
        name: "前脛骨筋",
        kana: "ぜんけいこつきん",
        category: "leg",
        categoryName: "あし",
        categoryColor: "#FFD93D",
        x: 51.5, y: 80.5,
        shortDesc: "すねの前側にある筋肉。つま先を上に向かって持ち上げるよ！",
        detail: "すねの骨（脛骨）の外側を走る筋肉。足首を反らせて、歩くときにつまづかないようにします。",
        hint: "すねの骨「脛骨（けいこつ）」の「前（ぜん）」にあるから前脛骨筋！",
        textbookNote: "すねの骨の前側にある筋肉。"
      },
      {
        id: "soleus",
        name: "ヒラメ筋",
        kana: "ひらめきん",
        category: "leg",
        categoryName: "あし",
        categoryColor: "#FFD93D",
        x: 53.5, y: 85.5,
        shortDesc: "ふくらはぎの奥にある筋肉。つま先立ちや立った姿勢をキープ！",
        detail: "腓腹筋の深層にある平たい筋肉。アキレス腱となってかかとの骨につきます。",
        hint: "海の魚の「シタビラメ」のような平べったい形だからこの名前！覚えやすさNo.1！",
        textbookNote: "シタビラメのような形なので、この名がある。"
      }
    ]
  },

  // ========================================================
  // 2. 筋肉（裏面 / 後面）
  // ========================================================
  {
    id: "muscle_back",
    name: "筋肉（裏面）",
    icon: "🏃",
    desc: "背中やお尻、太もも裏側、ふくらはぎの主要な筋肉（全12部位）",
    image: "assets/muscle_back.jpg",
    aspectRatio: "767 / 1024",
    masks: [
      { top: "3%", left: "0%", width: "32%", height: "45%" },   // 後頭筋〜広背筋
      { top: "38%", left: "0%", width: "32%", height: "15%" },  // 大臀筋
      { top: "70%", left: "0%", width: "32%", height: "20%" },  // 腓腹筋
      { top: "12%", right: "0%", width: "32%", height: "25%" }, // 三角筋〜上腕三頭筋〜外腹斜筋
      { top: "45%", right: "0%", width: "32%", height: "22%" }  // 大内転筋〜ハムストリングス
    ],
    items: [
      {
        id: "occipitalis",
        name: "後頭筋",
        kana: "こうとうきん",
        category: "head",
        categoryName: "あたま・くび",
        categoryColor: "#FF6B6B",
        x: 48.0, y: 6.0,
        shortDesc: "頭の後ろ側にある筋肉。頭皮を後ろに引っぱるよ！",
        detail: "後頭部にある薄い板状の筋肉。帽状腱膜を介して前頭筋とつながっています。",
        hint: "「後ろ（こう）の頭（とう）の筋肉」！前頭筋の反対側にあるよ！",
        textbookNote: "後頭部にある表情筋のひとつ。"
      },
      {
        id: "trapezius_b",
        name: "僧帽筋",
        kana: "そうぼうきん",
        category: "back_arm",
        categoryName: "せなか・うで",
        categoryColor: "#4D96FF",
        x: 44.0, y: 14.5,
        shortDesc: "首から背中にかけて広がる巨大なひし形の筋肉！",
        detail: "頸部から胸部にかけての正中線を底辺として、肩先を頂点にした三角形の筋。肩甲骨を動かします。",
        hint: "お坊さんの頭巾（僧帽）の形！肩こりになりやすい筋肉だよ！",
        textbookNote: "頸部から胸部にかけての正中線を底辺として、肩先を頂点にした三角形の筋。"
      },
      {
        id: "deltoid_b",
        name: "三角筋",
        kana: "さんかくきん",
        category: "back_arm",
        categoryName: "せなか・うで",
        categoryColor: "#4D96FF",
        x: 63.5, y: 16.0,
        shortDesc: "肩の後ろ側を包む筋肉。腕を後ろに引き上げるよ！",
        detail: "肩の丸みをつくる筋肉の後部線維。腕を後ろに引いたり水平に広げたりします。",
        hint: "肩を上から見るときれいな「三角形」をしているよ！",
        textbookNote: "肩の後ろ側を覆い、腕を後方に引く。"
      },
      {
        id: "triceps_brachii",
        name: "上腕三頭筋",
        kana: "じょうわんさんとうきん",
        category: "back_arm",
        categoryName: "せなか・うで",
        categoryColor: "#4D96FF",
        x: 71.0, y: 22.0,
        shortDesc: "二の腕の裏側にある筋肉！ひじをピンと伸ばすよ！",
        detail: "上腕の後面にある強大な筋肉。頭（始まり）が3つあるので三頭筋と呼びます。",
        hint: "力こぶ（二頭筋）の裏側！頭が「3つ」あるから上腕三頭筋！",
        textbookNote: "二の腕の裏側にあり、ひじ関節を力強く伸ばす筋肉。"
      },
      {
        id: "latissimus_dorsi",
        name: "広背筋",
        kana: "こうはいきん",
        category: "back_arm",
        categoryName: "せなか・うで",
        categoryColor: "#4D96FF",
        x: 44.0, y: 28.0,
        shortDesc: "背中の下部に扇形に広がる人体で一番面積が広い筋肉！",
        detail: "下胸部から腰部にかけての正中線から、腋窩（わきの下）の後方を通って上腕骨に至る三角形の筋。",
        hint: "「広く（こう）背中（はい）を覆う筋肉」！懸垂や水泳で腕をグッと引きつけるよ！",
        textbookNote: "下胸部から腰部にかけての正中線から、腋窩の後方を通って上腕骨に至る三角形の筋。"
      },
      {
        id: "external_oblique_b",
        name: "外腹斜筋",
        kana: "がいふくしゃきん",
        category: "back_arm",
        categoryName: "せなか・うで",
        categoryColor: "#4D96FF",
        x: 60.0, y: 33.5,
        shortDesc: "わき腹の横から後ろに見える筋肉！体をねじるよ！",
        detail: "側腹部から背部外側にかけて見える筋肉。体幹を回旋・側屈させます。",
        hint: "お腹の横を斜めに走る筋肉。後ろから見てもくびれを作っているよ！",
        textbookNote: "側腹部を構成する筋の後方部分。"
      },
      {
        id: "gluteus_maximus",
        name: "大臀筋",
        kana: "だいでんきん",
        category: "hip_leg",
        categoryName: "おしり・あし",
        categoryColor: "#FFD93D",
        x: 45.0, y: 44.0,
        shortDesc: "おしりのふくらみをつくる、体の中で一番強大な単一筋肉！",
        detail: "殿部の盛り上がりの基礎をつくる筋肉。直立二足歩行をするヒトで特に強大に発達しています。",
        hint: "「大きなお尻（臀部：でんぶ）の筋肉」！立ち上がったり階段を上るときに大活躍！",
        textbookNote: "殿部の盛り上がりの基礎をつくる筋。"
      },
      {
        id: "adductor_magnus",
        name: "大内転筋",
        kana: "だいないてんきん",
        category: "hip_leg",
        categoryName: "おしり・あし",
        categoryColor: "#FFD93D",
        x: 57.0, y: 51.5,
        shortDesc: "太ももの内側にある大きくて分厚い筋肉！足を内側に寄せるよ！",
        detail: "骨盤（坐骨・恥骨）から大腿骨へ伸びる大きな筋肉。太ももを力強く内転させます。",
        hint: "「大きな内転（内側に閉じる）筋肉」！太ももの内側で強い壁をつくるよ！",
        textbookNote: "太ももを内側に強く引き寄せる筋肉。"
      },
      {
        id: "biceps_femoris",
        name: "大腿二頭筋",
        kana: "だいたいにとうきん",
        category: "hip_leg",
        categoryName: "おしり・あし",
        categoryColor: "#FFD93D",
        x: 61.5, y: 54.5,
        shortDesc: "太ももの裏側の外側にある筋肉！ひざを曲げるよ！",
        detail: "太ももの裏側（外側）を走る筋肉。ハムストリングスの外側部分。",
        hint: "腕にあるのが上腕二頭筋、太ももにあるのが「大腿二頭筋」！",
        textbookNote: "太ももの裏側外側にあり、ひざを曲げる。"
      },
      {
        id: "semitendinosus",
        name: "半腱様筋",
        kana: "はんけんようきん",
        category: "hip_leg",
        categoryName: "おしり・あし",
        categoryColor: "#FFD93D",
        x: 58.0, y: 58.5,
        shortDesc: "太ももの裏側内側にある筋肉。下半分が長い腱になっているよ！",
        detail: "太もも裏の内側にある筋。筋腹の下半分が細長い腱（けん）になっているのが特徴です。",
        hint: "下半分が「腱（けん）のよう（様）」だから半腱様筋！",
        textbookNote: "太もも裏内側の筋。下半分が長い腱となる。"
      },
      {
        id: "semimembranosus",
        name: "半膜様筋",
        kana: "はんまくようきん",
        category: "hip_leg",
        categoryName: "おしり・あし",
        categoryColor: "#FFD93D",
        x: 56.0, y: 62.5,
        shortDesc: "半腱様筋の奥にある筋肉。上半分が膜のようになっているよ！",
        detail: "半腱様筋の深層・内側にある筋肉。上半分が平たい膜（まく）状の腱になっているのが特徴です。",
        hint: "上半分が「膜（まく）のよう（様）」だから半膜様筋！半腱様筋とペアで覚えよう！",
        textbookNote: "半腱様筋の深層にあり、上部が平たい膜状。"
      },
      {
        id: "gastrocnemius",
        name: "腓腹筋",
        kana: "ひふくきん",
        category: "hip_leg",
        categoryName: "おしり・あし",
        categoryColor: "#FFD93D",
        x: 44.0, y: 74.0,
        shortDesc: "ふくらはぎの表面にある筋肉！走ったりジャンプするときに活躍！",
        detail: "ふくらはぎの筋。深層のヒラメ筋とともに下腿三頭筋をつくり、停止腱がアキレス腱となる。",
        hint: "「こむら返り」でおなじみのふくらはぎの筋肉！ヒラメ筋と合体してアキレス腱になるよ！",
        textbookNote: "ふくらはぎの筋。深層のヒラメ筋とともに下腿三頭筋をつくる。停止腱がアキレス腱。"
      }
    ]
  },

  // ========================================================
  // 3. 筋の形状
  // ========================================================
  {
    id: "muscle_shapes",
    name: "筋の形状",
    icon: "📐",
    desc: "筋肉の線維の走り方やかたちによる分類（全5種類）",
    image: "assets/muscle_shapes.png",
    aspectRatio: "622 / 1024",
    masks: [
      { top: "12%", left: "33%", width: "25%", height: "15%" },  // 紡錘状筋の文字
      { top: "8%", right: "8%", width: "28%", height: "20%" },   // 二頭筋の文字
      { top: "68%", left: "4%", width: "30%", height: "25%" },   // 羽状筋の文字
      { top: "68%", left: "35%", width: "32%", height: "25%" },  // 多腹筋の文字
      { top: "68%", right: "4%", width: "30%", height: "25%" }   // 鋸筋の文字
    ],
    items: [
      {
        id: "fusiform",
        name: "紡錘状筋",
        kana: "ぼうすいじょうきん",
        category: "shapes",
        categoryName: "かたち",
        categoryColor: "#8B5CF6",
        x: 17.5, y: 22.0,
        shortDesc: "最も筋らしい、筋の基本形！中央が太く両端が細いよ。",
        detail: "両端の腱に向かって細くなり、中央の筋腹がふくらんだ紡錘（つむ）の形をした最も典型的な筋肉です。",
        hint: "糸をつむぐ道具「紡錘（つむ）」の形！上腕二頭筋などもこの仲間だよ！",
        textbookNote: "最も筋らしい、筋の基本形。"
      },
      {
        id: "biceps_shape",
        name: "二頭筋",
        kana: "にとうきん",
        category: "shapes",
        categoryName: "かたち",
        categoryColor: "#8B5CF6",
        x: 62.0, y: 20.0,
        shortDesc: "筋頭が2つある、すなわち2か所から起こる筋肉！",
        detail: "起始（始まり）の筋頭が2つに分かれており、合流して1つの腱となって停止する筋です。",
        hint: "頭が「2つ」あるから二頭筋！上腕二頭筋や大腿二頭筋があるね！",
        textbookNote: "筋頭が2つある、すなわち2か所から起こる筋。"
      },
      {
        id: "pennate",
        name: "羽状筋",
        kana: "うじょうきん",
        category: "shapes",
        categoryName: "かたち",
        categoryColor: "#8B5CF6",
        x: 17.5, y: 55.0,
        shortDesc: "鳥の羽のように、短い筋線維が斜めにびっしり並ぶ筋肉！",
        detail: "短く数の多い筋線維が、中央の腱に向かって鳥の羽のように斜めに走行している筋。強い力を出せます。",
        hint: "「鳥の羽（はね）」にそっくりだから羽状筋！大腿直筋などが代表的。",
        textbookNote: "短く数の多い筋線維が、鳥の羽のように斜めに走行している筋。"
      },
      {
        id: "polygastric",
        name: "多腹筋",
        kana: "たふくきん",
        category: "shapes",
        categoryName: "かたち",
        categoryColor: "#8B5CF6",
        x: 45.0, y: 55.0,
        shortDesc: "筋腹が3つ以上に分かれている筋肉。間の腱を「腱画」と呼ぶよ！",
        detail: "筋腹が腱画（けんかく）によって縦に3つ以上の節に分かれている筋。腹直筋が代表例です。",
        hint: "お腹のシックスパック（腹直筋）がこれ！間に白い「腱画（けんかく）」が挟まっているよ！",
        textbookNote: "筋腹が3つ以上に分かれている筋。間の腱を腱画という。"
      },
      {
        id: "serrated",
        name: "鋸筋",
        kana: "きょきん",
        category: "shapes",
        categoryName: "かたち",
        categoryColor: "#8B5CF6",
        x: 79.0, y: 55.0,
        shortDesc: "起始がのこぎりの歯のようにギザギザ広がっている筋肉！",
        detail: "始まり（起始）の部分がギザギザしたのこぎりの刃のように複数に分かれて骨に付着している筋です。",
        hint: "大工さんの「のこぎり（鋸）」の形！前鋸筋がまさにこの形だよ！",
        textbookNote: "起始がのこぎりの歯のように広く広がっている筋。"
      }
    ]
  },

  // ========================================================
  // 4. 骨格（前面） ★テスト出題番号 1〜19 完全対応！
  // ========================================================
  {
    id: "skeleton_front",
    name: "骨格（前面）",
    icon: "💀",
    desc: "頭から足先まで、体の前側にある骨と骨格構造（テスト番号1〜19番）",
    image: "assets/skeleton_front.jpg",
    aspectRatio: "746 / 1024",
    masks: [
      { top: "6%", left: "0%", width: "26%", height: "80%" },    // 左側の解説文（1,4,5,9）
      { top: "34%", right: "0%", width: "26%", height: "20%" },  // 前腕・しゃっこつの解説
      { top: "47%", right: "0%", width: "26%", height: "10%" }   // 手の骨
    ],
    items: [
      {
        id: "bone_f_1",
        name: "頭蓋骨",
        kana: "とうがいこつ",
        category: "head_bone",
        categoryName: "頭・胸の骨",
        categoryColor: "#EC4899",
        x: 14.5, y: 6.8,
        shortDesc: "【赤枠 1 番】頭部の骨全体！15種23個の骨からなるよ。",
        detail: "脳を包む脳頭蓋と、顔をつくる顔面頭蓋からなる骨格。頭部の骨全体を頭蓋骨と呼び、15種23個の骨から構成されます。",
        hint: "テスト番号【1】番！「頭（あたま）のフタ（蓋）の骨」！大切な脳を守るよ！",
        textbookNote: "頭部の骨全体を頭蓋骨という。15種23個の骨からなる。"
      },
      {
        id: "bone_f_2",
        name: "胸骨",
        kana: "きょうこつ",
        category: "head_bone",
        categoryName: "頭・胸の骨",
        categoryColor: "#EC4899",
        x: 29.5, y: 19.5,
        shortDesc: "【赤枠 2 番】胸のど真ん中にあるネクタイのような平たい骨！",
        detail: "胸部前面の中央にある細長い扁平骨。左右の肋軟骨と結合し、胸郭の前面を構成します。",
        hint: "テスト番号【2】番！胸の真ん中にある骨。心臓マッサージで圧迫する場所だよ！",
        textbookNote: "胸部前面正中にある扁平骨。肋骨と関節する。"
      },
      {
        id: "bone_f_3",
        name: "肋骨",
        kana: "ろっこつ",
        category: "head_bone",
        categoryName: "頭・胸の骨",
        categoryColor: "#EC4899",
        x: 29.5, y: 22.0,
        shortDesc: "【赤枠 3 番】胸のまわりをカゴのように囲む12対のあばら骨！",
        detail: "左右12対（24本）あり、胸椎から始まって前方へ弓状に伸び、胸骨へとつながります。",
        hint: "テスト番号【3】番！いわゆる「あばら骨」！肺や心臓を守るよ！",
        textbookNote: "左右12対あり、胸郭をつくる弓状の骨。"
      },
      {
        id: "bone_f_4",
        name: "胸郭",
        kana: "きょうかく",
        category: "head_bone",
        categoryName: "頭・胸の骨",
        categoryColor: "#EC4899",
        x: 12.5, y: 21.0,
        shortDesc: "【赤枠 4 番】12対の肋骨・12個の胸椎・1個の胸骨が合体した鳥かご状の枠組み！",
        detail: "胸部の骨格全体。12対の肋骨と12個の胸椎、1個の胸骨からなり、胸部の枠組み（胸郭）をつくります。",
        hint: "テスト番号【4】番！心臓や肺が入っている「鳥かごのような枠組み」全体のこと！",
        textbookNote: "12対の肋骨と12個の胸椎、1個の胸骨からなり、胸部の枠組みをつくる。"
      },
      {
        id: "bone_f_5",
        name: "脊柱",
        kana: "せきちゅう",
        category: "spine",
        categoryName: "背骨・体幹",
        categoryColor: "#F59E0B",
        x: 11.5, y: 34.0,
        shortDesc: "【赤枠 5 番】椎骨がつながってできた「背骨」全体！",
        detail: "椎骨という短骨がつながってできている。椎骨は上から頸椎（7個）、胸椎（12個）、腰椎（5個）、仙骨（1個）、尾骨と分けられます。",
        hint: "テスト番号【5】番！首（7）・胸（12）・腰（5）・仙骨・尾骨からなる「背骨」全体！",
        textbookNote: "椎骨がつながってできた人体の中心の支柱。"
      },
      {
        id: "bone_f_6",
        name: "腸骨",
        kana: "ちょうこつ",
        category: "pelvis",
        categoryName: "骨盤・腰の骨",
        categoryColor: "#10B981",
        x: 27.5, y: 57.0,
        shortDesc: "【赤枠 6 番】骨盤の上部にある大きなうちわのような骨！",
        detail: "寛骨の上部を占める扇形の大きな骨。上縁の腸骨稜は「腰に手をあてる」ときに触れます。",
        hint: "テスト番号【6】番！骨盤の上のほうにある広い骨。「腰に手をあてて」触れる場所！",
        textbookNote: "寛骨の上部を構成する大きな骨。"
      },
      {
        id: "bone_f_7",
        name: "恥骨",
        kana: "ちこつ",
        category: "pelvis",
        categoryName: "骨盤・腰の骨",
        categoryColor: "#10B981",
        x: 27.5, y: 60.5,
        shortDesc: "【赤枠 7 番】骨盤の前下部にある骨！左右が結合しているよ。",
        detail: "寛骨の前下部を構成する骨。左右の恥骨が正中で結合（恥骨結合）しています。",
        hint: "テスト番号【7】番！骨盤の前側の骨。左右が真ん中で合体しているよ！",
        textbookNote: "寛骨の前下部を構成する骨。"
      },
      {
        id: "bone_f_8",
        name: "坐骨",
        kana: "ざこつ",
        category: "pelvis",
        categoryName: "骨盤・腰の骨",
        categoryColor: "#10B981",
        x: 27.5, y: 64.0,
        shortDesc: "【赤枠 8 番】座ったときに椅子にあたる骨！",
        detail: "寛骨の後下部を構成する頑丈な骨。座骨結節は座ったときに体重を直接支えます。",
        hint: "テスト番号【8】番！「座る（ざ）骨」と書くよ！イスに座ると体重がのる骨！",
        textbookNote: "寛骨の後下部を構成する骨。座骨結節をもつ。"
      },
      {
        id: "bone_f_9",
        name: "骨盤",
        kana: "こつばん",
        category: "pelvis",
        categoryName: "骨盤・腰の骨",
        categoryColor: "#10B981",
        x: 8.5, y: 60.5,
        shortDesc: "【赤枠 9 番】体幹の底にあり、内臓を下から支える器状の骨格！",
        detail: "体幹の底にあり内臓を支える。寛骨は腸骨・坐骨・恥骨が結合したもの。仙骨とともに骨盤を形成します。",
        hint: "テスト番号【9】番！腸骨・恥骨・坐骨（寛骨）と仙骨が合体した大きな受け皿！",
        textbookNote: "体幹の底にあり、内臓を支える骨格。"
      },
      {
        id: "bone_f_10",
        name: "鎖骨",
        kana: "さこつ",
        category: "arm_bone",
        categoryName: "うでの骨",
        categoryColor: "#3B82F6",
        x: 72.5, y: 12.5,
        shortDesc: "【赤枠 10 番】首の下で横に伸びるS字形の骨！",
        detail: "胸骨と肩甲骨を連結する骨。腕を胸から離して自由に動かせるように支えています。",
        hint: "テスト番号【10】番！首の下にある横長の骨！",
        textbookNote: "胸骨と肩甲骨を連結する横長の骨。"
      },
      {
        id: "bone_f_11",
        name: "肩甲骨",
        kana: "けんこうこつ",
        category: "arm_bone",
        categoryName: "うでの骨",
        categoryColor: "#3B82F6",
        x: 72.5, y: 15.0,
        shortDesc: "【赤枠 11 番】肩の奥・背中にある三角形の平たい骨！",
        detail: "背部上部にある三角形の骨。鎖骨や上腕骨と関節をつくり、腕の動きを大きくサポートします。",
        hint: "テスト番号【11】番！いわゆる「天使の羽」がある三角形の骨！",
        textbookNote: "背部上部にある三角形の扁平骨。"
      },
      {
        id: "bone_f_12",
        name: "上肢帯",
        kana: "じょうしたい",
        category: "arm_bone",
        categoryName: "うでの骨",
        categoryColor: "#3B82F6",
        x: 81.5, y: 13.5,
        shortDesc: "【赤枠 12 番】鎖骨と肩甲骨からなる、腕を胴体につなぐベルト（帯）！",
        detail: "鎖骨と肩甲骨の総称（肩甲帯ともいう）。自由上肢骨（腕の骨）を体幹骨につなぎ止める役割をします。",
        hint: "テスト番号【12】番！鎖骨＋肩甲骨をセットで呼ぶ名前！腕をつなぐ「帯（ベルト）」だよ。",
        textbookNote: "鎖骨と肩甲骨からなり、上肢を体幹に連結する。"
      },
      {
        id: "bone_f_13",
        name: "上腕骨",
        kana: "じょうわんこつ",
        category: "arm_bone",
        categoryName: "うでの骨",
        categoryColor: "#3B82F6",
        x: 82.5, y: 24.5,
        shortDesc: "【赤枠 13 番】肩からひじまでの太い二の腕の骨！",
        detail: "上腕を構成する長骨。肩関節と肘関節をつなぐ太く頑丈な骨です。",
        hint: "テスト番号【13】番！「上の腕（うで）の骨」！二の腕の中にあるよ！",
        textbookNote: "肩から肘までの上腕を形成する骨。"
      },
      {
        id: "bone_f_14",
        name: "橈骨",
        kana: "とうこつ",
        category: "arm_bone",
        categoryName: "うでの骨",
        categoryColor: "#3B82F6",
        x: 82.5, y: 35.0,
        shortDesc: "【赤枠 14 番】前腕（ひじから手首）の「親指側」にある骨！",
        detail: "前腕の親指側にある骨。手首を回す（回内・回外）ときに尺骨のまわりを回転します。",
        hint: "テスト番号【14】番！「親指側」が橈骨（とうこつ）！脈をとる場所だよ。",
        textbookNote: "前腕の親指側にある骨。"
      },
      {
        id: "bone_f_15",
        name: "尺骨",
        kana: "しゃっこつ",
        category: "arm_bone",
        categoryName: "うでの骨",
        categoryColor: "#3B82F6",
        x: 82.5, y: 38.0,
        shortDesc: "【赤枠 15 番】前腕（ひじから手首）の「小指側」にある骨！",
        detail: "前腕の小指側にある骨。上端の肘頭がひじのとがった部分を作ります。（＊「しゃくこつ」とも読みます）",
        hint: "テスト番号【15】番！「小指側」が尺骨（しゃっこつ）！昔の長さをはかる『尺』が語源！",
        textbookNote: "前腕の小指側にある骨。しゃっこつ、しゃくこつと読む。"
      },
      {
        id: "bone_f_16",
        name: "大腿骨",
        kana: "だいたいこつ",
        category: "leg_bone",
        categoryName: "あしの骨",
        categoryColor: "#8B5CF6",
        x: 81.5, y: 57.5,
        shortDesc: "【赤枠 16 番】太ももを通る、体の中で一番長くて太い最強の骨！",
        detail: "人体で最長・最大の長骨。全体重を支えて骨盤とひざ関節をつなぎます。",
        hint: "テスト番号【16】番！「大きな腿（もも）の骨」！人体最長・最強の骨だよ！",
        textbookNote: "人体の中で最長・最大の骨。"
      },
      {
        id: "bone_f_17",
        name: "膝蓋骨",
        kana: "しつがいこつ",
        category: "leg_bone",
        categoryName: "あしの骨",
        categoryColor: "#8B5CF6",
        x: 80.5, y: 67.0,
        shortDesc: "【赤枠 17 番】丸で囲まれたひざの骨！いわゆる「ひざのお皿」！",
        detail: "大腿四頭筋の腱の中にある種子骨。ひざ関節の前面を保護し、ひざを伸ばす力をテコの原理で効率化します。",
        hint: "テスト番号【17】番！いわゆる「ひざの皿」！丸印で強調されている超重要骨！",
        textbookNote: "ひざ関節の前面にある種子骨。いわゆる膝の皿。"
      },
      {
        id: "bone_f_18",
        name: "腓骨",
        kana: "ひこつ",
        category: "leg_bone",
        categoryName: "あしの骨",
        categoryColor: "#8B5CF6",
        x: 80.0, y: 74.5,
        shortDesc: "【赤枠 18 番】すねの「外側」にある細い骨！手書きメモあり！",
        detail: "すねの外側にある細長い骨。脛骨に寄り添い、下端が外くるぶし（外果）をつくります。",
        hint: "テスト番号【18】番！すねの外側にある細いほうの骨！教科書にも手書きでメモが入っているよ！",
        textbookNote: "下腿の外側にある細い骨。外果をつくる。"
      },
      {
        id: "bone_f_19",
        name: "脛骨",
        kana: "けいこつ",
        category: "leg_bone",
        categoryName: "あしの骨",
        categoryColor: "#8B5CF6",
        x: 80.0, y: 79.5,
        shortDesc: "【赤枠 19 番】すねの「内側」にある太い骨！「弁慶の泣き所」だよ。",
        detail: "すねの内側にある太く頑丈な骨。大腿骨からの全体重を支えて足首に伝えます。",
        hint: "テスト番号【19】番！すねのメインの太い骨！ぶつけると涙が出るほど痛い場所！",
        textbookNote: "下腿の内側にある太い骨。体重を支える。"
      }
    ]
  },

  // ========================================================
  // 5. 骨格（後面）
  // ========================================================
  {
    id: "skeleton_back",
    name: "骨格（後面）",
    icon: "🦴",
    desc: "頭から足先まで、体を後ろから支える人体の骨（全14部位＋脊柱区分）",
    image: "assets/skeleton_back.jpg",
    aspectRatio: "703 / 1024",
    masks: [
      { top: "4%", left: "0%", width: "25%", height: "45%" },   // 頭蓋骨〜尺骨
      { top: "55%", left: "0%", width: "25%", height: "30%" },  // 手〜大腿骨〜腓骨
      { top: "40%", right: "12%", width: "20%", height: "10%" },// 仙骨・尾骨
      { top: "68%", right: "0%", width: "35%", height: "30%" }  // ヒトの骨盤コラム
    ],
    items: [
      {
        id: "skull_b",
        name: "頭蓋骨",
        kana: "とうがいこつ",
        category: "trunk_bone",
        categoryName: "頭・体幹の骨",
        categoryColor: "#EC4899",
        x: 40.5, y: 6.5,
        shortDesc: "脳を包んで守るヘルメットのような頑丈な骨！",
        detail: "脳を保護する脳頭蓋と、顔面を構成する顔面頭蓋からなる骨の集まりです。",
        hint: "「頭（あたま）のフタ（蓋）の骨」！大切な脳を24時間守っているよ。",
        textbookNote: "脳を保護し、顔面を形成する骨格。"
      },
      {
        id: "clavicle_b",
        name: "鎖骨",
        kana: "さこつ",
        category: "upper_bone",
        categoryName: "うでの骨",
        categoryColor: "#3B82F6",
        x: 30.0, y: 15.0,
        shortDesc: "首の下で横に伸びるS字形の骨。肩を支えるよ！",
        detail: "胸骨と肩甲骨をつなぐ横長の骨。腕の自由な動きを支えています。",
        hint: "首の下にある横に長い骨！肩と胸をつないで腕を動かしやすくするよ。",
        textbookNote: "胸骨と肩甲骨を連結する骨。"
      },
      {
        id: "scapula_b",
        name: "肩甲骨",
        kana: "けんこうこつ",
        category: "upper_bone",
        categoryName: "うでの骨",
        categoryColor: "#3B82F6",
        x: 34.0, y: 21.0,
        shortDesc: "背中の上にある三角形の平たい骨。天使の羽の場所！",
        detail: "背部の上部にある逆三角形の平たい骨。腕の動きに合わせてダイナミックにスライドします。",
        hint: "背中に手をまわすと触れる三角形の骨！「天使の羽」とも呼ばれるよ！",
        textbookNote: "背部上部にある三角形の扁平骨。"
      },
      {
        id: "humerus_b",
        name: "上腕骨",
        kana: "じょうわんこつ",
        category: "upper_bone",
        categoryName: "うでの骨",
        categoryColor: "#3B82F6",
        x: 25.0, y: 27.5,
        shortDesc: "肩からひじまでの太い腕の骨！",
        detail: "上肢（腕）の中で最も太く長い長骨。肩関節とひじ関節を構成します。",
        hint: "二の腕の中を通る骨！「上の腕（うで）の骨」と書くよ！",
        textbookNote: "肩から肘までの上腕を形成する長骨。"
      },
      {
        id: "ribs_b",
        name: "肋骨",
        kana: "ろっこつ",
        category: "trunk_bone",
        categoryName: "頭・体幹の骨",
        categoryColor: "#EC4899",
        x: 36.0, y: 29.0,
        shortDesc: "心臓や肺を鳥かごのように守る12対（24本）の骨！",
        detail: "胸郭をつくる弓状の骨。左右12対あり、呼吸に合わせて上下に動きます。",
        hint: "いわゆる「あばら骨」のこと！心臓や肺を大切にガードしているよ！",
        textbookNote: "胸郭を形成し、胸部内臓を保護する骨。"
      },
      {
        id: "radius_b",
        name: "橈骨",
        kana: "とうこつ",
        category: "upper_bone",
        categoryName: "うでの骨",
        categoryColor: "#3B82F6",
        x: 20.0, y: 40.5,
        shortDesc: "ひじから手首までの「親指側」にある骨！",
        detail: "前腕の2本の骨のうち、親指側にある骨。手首をねじる（回内・回外）ときに回転します。",
        hint: "親指側にあるのが橈骨（とうこつ）！脈（みゃく）をはかる場所だよ！",
        textbookNote: "前腕の親指側にある長骨。"
      },
      {
        id: "ulna_b",
        name: "尺骨",
        kana: "しゃっこつ",
        category: "upper_bone",
        categoryName: "うでの骨",
        categoryColor: "#3B82F6",
        x: 18.0, y: 44.0,
        shortDesc: "ひじから手首までの「小指側」にある骨！ひじのとがりを作るよ。",
        detail: "前腕の小指側にある骨。上端の肘頭（ちゅうとう）がひじのとがった部分を作ります。",
        hint: "小指側にあるのが尺骨（しゃっこつ）！昔は長さを測るものさし（尺）に使われたよ！",
        textbookNote: "前腕の小指側にある長骨。肘頭をつくる。"
      },
      {
        id: "hand_bones_b",
        name: "手の骨",
        kana: "てのほね",
        category: "upper_bone",
        categoryName: "うでの骨",
        categoryColor: "#3B82F6",
        x: 14.5, y: 50.0,
        shortDesc: "手根骨・中手骨・指骨からなる、器用に動く骨の集まり！",
        detail: "手首から指先にかけて27個もの骨が集まっており、繊細な手の動きを可能にしています。",
        hint: "片手だけで27個も骨があるよ！道具を使えるのはこの骨たちのおかげ！",
        textbookNote: "手根骨・中手骨・指骨で構成される。"
      },
      {
        id: "hip_bone_b",
        name: "寛骨",
        kana: "かんこつ",
        category: "lower_bone",
        categoryName: "こし・あしの骨",
        categoryColor: "#10B981",
        x: 35.0, y: 42.0,
        shortDesc: "骨盤の左右をつくる大きくて頑丈な骨！内臓を下から支えるよ。",
        detail: "腸骨・恥骨・坐骨が大人になると融合して1つの寛骨になります。左右の寛骨と仙骨で骨盤を形成します。",
        hint: "直立二足歩行のために皿のように広がったヒト特有の頑丈な骨（骨盤）だよ！",
        textbookNote: "腸骨・恥骨・坐骨が癒合した骨。骨盤を構成。"
      },
      {
        id: "sacrum_b",
        name: "仙骨",
        kana: "せんこつ",
        category: "trunk_bone",
        categoryName: "頭・体幹の骨",
        categoryColor: "#EC4899",
        x: 42.0, y: 43.0,
        shortDesc: "骨盤の中央にある逆三角形の骨。背骨の土台だよ！",
        detail: "5個の仙椎が癒合してできた逆三角形の骨。脊柱を支え、骨盤の中心に位置します。",
        hint: "背骨の一番下、骨盤の真ん中にはまっている「神聖な骨（仙骨）」！",
        textbookNote: "5個の仙椎が癒合した骨。骨盤後壁をなす。"
      },
      {
        id: "coccyx_b",
        name: "尾骨",
        kana: "びこつ",
        category: "trunk_bone",
        categoryName: "頭・体幹の骨",
        categoryColor: "#EC4899",
        x: 42.0, y: 47.5,
        shortDesc: "仙骨の下にある小さなしっぽの名残りの骨（尾てい骨）！",
        detail: "3〜5個の尾椎が癒合した小さな骨。人間が大昔にしっぽを持っていた痕跡です。",
        hint: "いわゆる「尾てい骨」のこと！しっぽの名残りだよ！",
        textbookNote: "仙骨の下端に続く尾椎の癒合骨。"
      },
      {
        id: "femur_b",
        name: "大腿骨",
        kana: "だいたいこつ",
        category: "lower_bone",
        categoryName: "こし・あしの骨",
        categoryColor: "#10B981",
        x: 34.0, y: 62.0,
        shortDesc: "太ももの中にある、人体で最も長くて最も頑丈な骨！",
        detail: "骨盤の寛骨臼と股関節をつくり、下端は膝関節をつくります。全体重を支える最強の骨。",
        hint: "体の中で「一番長くて頑丈な骨」！太ももを通っているよ！",
        textbookNote: "人体の中で最長・最大の長骨。"
      },
      {
        id: "tibia_b",
        name: "脛骨",
        kana: "けいこつ",
        category: "lower_bone",
        categoryName: "こし・あしの骨",
        categoryColor: "#10B981",
        x: 33.0, y: 80.0,
        shortDesc: "すねの内側にある太い骨！いわゆる「弁慶の泣き所」だよ。",
        detail: "下腿（すね）の内側にある太い骨。大腿骨からの体重を直接受け止めて足首に伝えます。",
        hint: "すねの太い骨！ぶつけると涙が出るほど痛い「弁慶の泣き所」はここ！",
        textbookNote: "下腿の内側にある太い長骨。体重を支える。"
      },
      {
        id: "fibula_b",
        name: "腓骨",
        kana: "ひこつ",
        category: "lower_bone",
        categoryName: "こし・あしの骨",
        categoryColor: "#10B981",
        x: 30.0, y: 83.0,
        shortDesc: "すねの外側にある細長い骨。足首の関節を安定させるよ！",
        detail: "脛骨の外側に並ぶ細い長骨。体重はほとんど支えませんが、筋肉の付着部や外くるぶしを作ります。",
        hint: "すねの外側にある細い骨！外側の「くるぶし」はこの骨の下端だよ！",
        textbookNote: "下腿の外側にある細い長骨。外果をつくる。"
      },
      {
        id: "cervical_b",
        name: "頸椎（20）",
        kana: "けいつい",
        category: "spine",
        categoryName: "脊柱（せぼね）",
        categoryColor: "#F59E0B",
        x: 78.5, y: 12.8,
        shortDesc: "首の骨（7個）！重い頭を支えて上下左右に動かすよ。",
        detail: "脊柱の一番上、首の部分にある7個の椎骨。第1頸椎（環椎）と第2頸椎（軸椎）で頭を回します。",
        hint: "首の骨は「7個」！キリンも人間も同じ7個なんだよ！赤枠の20番。",
        textbookNote: "首にある7個の椎骨。"
      },
      {
        id: "thoracic_b",
        name: "胸椎（21）",
        kana: "きょうつい",
        category: "spine",
        categoryName: "脊柱（せぼね）",
        categoryColor: "#F59E0B",
        x: 78.5, y: 23.5,
        shortDesc: "胸の骨（12個）！肋骨（あばら骨）とつながっているよ。",
        detail: "背中の部分にある12個の椎骨。12対の肋骨と関節をつくり胸郭を支えます。",
        hint: "肋骨がつながる背中の骨！「12個」あるよ！赤枠の21番。",
        textbookNote: "肋骨と関節をつくる12個の椎骨。"
      },
      {
        id: "lumbar_b",
        name: "腰椎（22）",
        kana: "ようつい",
        category: "spine",
        categoryName: "脊柱（せぼね）",
        categoryColor: "#F59E0B",
        x: 79.5, y: 35.5,
        shortDesc: "腰の骨（5個）！上半身の重みを支える大きくて頑丈な骨。",
        detail: "腰の部分にある5個の椎骨。体重の多くを支えるため、椎体が非常に大きく分厚くなっています。",
        hint: "腰を支える「5個」のどっしりした骨！赤枠の22番。",
        textbookNote: "腰部にある5個の大きく頑丈な椎骨。"
      },
      {
        id: "vertebral_column_b",
        name: "脊柱（23）",
        kana: "せきちゅう",
        category: "spine",
        categoryName: "脊柱（せぼね）",
        categoryColor: "#F59E0B",
        x: 89.5, y: 27.5,
        shortDesc: "頸椎・胸椎・腰椎・仙骨・尾骨がつながった「背骨」全体！",
        detail: "頭蓋骨から骨盤までをつなぐ人体の支柱。ゆるやかなS字状カーブを描いて衝撃を吸収します。",
        hint: "「背骨（せぼね）」全体のこと！S字カーブでクッションの役割をするよ！赤枠の23番。",
        textbookNote: "頸椎・胸椎・腰椎・仙骨・尾骨からなる脊柱全体。"
      }
    ]
  }
];
