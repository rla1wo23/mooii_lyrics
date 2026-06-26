// 곡별 다국어 및 메타데이터 정보
const lyricsData = [
  {
    id: "blue-hawaii",
    titles: { ko: "블루하와이", en: "Blue Hawaii", es: "Blue Hawaii", ja: "ブルーハワイ" },
    credits: {
      lyrics: { ko: "손창현", en: "Son Chang-hyun", es: "Son Chang-hyun", ja: "ソン・チャンヒョン" },
      composer: { ko: "김재현, 손창현", en: "Kim Jae-hyun, Son Chang-hyun", es: "Kim Jae-hyun, Son Chang-hyun", ja: "キム・ジェヒョン, ソン・チャンヒョン" }
    },
    theme: {
      ko: "여름의 더위와 신림동 칼부림 사건을 주제로 만들었습니다.",
      en: "Created under the theme of summer heat and the Sillim-dong stabbing rampage.",
      es: "Creado bajo el tema del calor del verano y el apuñalamiento masivo de Sillim-dong.",
      ja: "夏の暑さと新林洞通り魔事件をテーマに作りました。"
    },
    reference: {
      ko: "신림동 칼부림 사건, Pixies - Debaser, Pavement - Elevate Me Later",
      en: "Sillim-dong stabbing rampage, Pixies - Debaser, Pavement - Elevate Me Later",
      es: "Apuñalamiento de Sillim-dong, Pixies - Debaser, Pavement - Elevate Me Later",
      ja: "新林洞通り魔事件, Pixies - Debaser, Pavement - Elevate Me Later"
    },
    lyrics: {
      ko: `불을 붙혀놓고\n태워 버리려 했었지\n즐거운 모습들이\n배알이 너무 꼴려서\n\n날 좀 봐달라고\n목구멍 끝까지 차올랐어\n계속 이럴거면\n나도 가만있지 않을거야\n\n전부 겁을 먹게 만들거야\n전부 겁을 먹게 만들거야\n전부 겁을 먹게 만들거야\n전부 겁을 먹게 만들거야\n전부 겁을 먹게 만들거야\n전부 겁을 먹게 만들거야`,
      en: `I set the fire alight\nAnd I tried to burn it all\nThose happy faces\nThey'd drive me fucking crazy \n\nWould you look at me\nThose words were stuck in my throat\nIf you keep acting like this\nI won't just stay put anymore\n\nI'll scare the hell out of them\nI'll scare the hell out of them\nI'll scare the hell out of them\nI'll scare the hell out of them\nI'll scare the hell out of them\nI'll scare the hell out of them`,
      es: `Encendí el fuego\nY intenté arder todo\nSus caras felices\nMe carcomieron con rabia\n\nMiren me\nLas palabras estuve a punto de decir\nSi sigan así\nNo voy a estar tranquilo no más\n\nLes voy a aterrorizar a todos\nLes voy a aterrorizar a todos\nLes voy a aterrorizar a todos\nLes voy a aterrorizar a todos\nLes voy a aterrorizar a todos\nLes voy a aterrorizar a todos`,
      ja: `火をつけたまま\n焼こうとした\nあの楽しい姿に\n腹が立ちすぎて\n\n俺を見てくれと\n喉まで出かかっていた\nこのまま続くなら\n俺も黙っていないぞ\n\nみんな怖がらせてやる\nみんな怖がらせてやる\nみんな怖がらせてやる\nみんな怖がらせてやる\nみんな怖がらせてやる\nみんな怖がらせてやる`
    }
  },
  {
    id: "pink-palace",
    titles: { ko: "핑크팰리스", en: "Pink Palace", es: "Pink Palace", ja: "ピンクパレス" },
    credits: {
      lyrics: { ko: "김재현", en: "Kim Jae-hyun", es: "Kim Jae-hyun", ja: "キム・ジェヒョン" },
      composer: { ko: "김재현, 손창현", en: "Kim Jae-hyun, Son Chang-hyun", es: "Kim Jae-hyun, Son Chang-hyun", ja: "キム・ジェヒョン, ソン・チャンヒョン" }
    },
    theme: {
      ko: "다큐멘터리 '핑크팰리스'를 모티브로 한 가사이며, 주제는 장애인의 성욕입니다.",
      en: "Lyrics themed around the documentary 'Pink Palace', which focuses on the sexual desire of disabled people.",
      es: "Letras inspiradas en el documental 'Pink Palace', cuyo tema es el deseo sexual de las personas con discapacidad.",
      ja: "ドキュメンタリー映画『ピンクパレス』をテーマにした歌詞です。ドキュメンタリー의 주제는 장애인의 성욕입니다."
    },
    reference: {
      ko: "다큐멘터리 '핑크팰리스', Michael Jackson - Black or White, The Strokes - The Modern Age",
      en: "Documentary 'Pink Palace', Michael Jackson - Black or White, The Strokes - The Modern Age",
      es: "Documental 'Pink Palace', Michael Jackson - Black or White, The Strokes - The Modern Age",
      ja: "ドキュメンタリー映画『ピンクパレス』, Michael Jackson - Black or White, The Strokes - The Modern Age"
    },
    lyrics: {
      ko: `당신들의 나신을 볼 수 없었지\n성은 빨간 곳에서 무너져갔지\n가장 추하게\n\n사람들은 축복을 전혀 모르고\n헛된 영원한 삶을 영생을 믿네\n말도 안되는\n\n난 아직 죽기 이르다고 마지못해 소리치지만\n진심은 아냐\n모두가 불편해하는데 어떻게 견딜수 있겠어\n위선적이야\n\n하얀 성의 공주는 기도를 했네\n그녀가 고민할때 죽어야 했네\n살이 썩은 왕자는 갇혀있었네\n그가 나타났을때 모두 피했네\n경멸하면서`,
      en: `I could never see, your naked bodies\nThe castle crumbled down, from the reddest place\nSo gracelessly\n\nPeople know nothing about the blessings they've been given\nThey believe in idle eternal life, everlasting for them\nIt doesn't make any sense \n\nI'm screaming I can’t die just yet, only because I guess that's what I must do\nit's not what I really want\nIf no one can even stand me, how am I even supposed to bear\nIt's so hypocritical\n\nThe princess inside a white castle she prayed\nAs she started to doubt, he had to face death\nThe prince with rotting skin, hidden behind his cage\nWhen he came in their view, they all ran away\nDespising and loathing him`,
      es: `Nunca podía ver, sus cuerpos desnudos \nEl castillo se desmenuzó, desde el lugar más rojo\nDesagradablemente\n\nLa gente no sabe nada, sobre sus bendiciones\nCreen en vacías vidas perpetuas, eternas también\nNo tiene ningún sentido\n\nGrito que ya no puedo morir, porque supongo que eso debo hacer\nPero no es lo que realmente quiero\nSi nadie puede soportarme, como debo aguantar\nEs tan hipocrita\n\nLa princesa en el castillo blanco, rezó\nCuando empezó dudar, él tuvo que morir\nEl príncipe con la piel podrida, en su jaula detenido\nCuando apareció en la vista, todo el mundo huyó\nDespreciandolo`,
      ja: `貴方らの裸身は見えなかった\n性は赤い場所から崩れていった\n最も醜く\n\n人々は祝福を全く知らず\n虚しい永遠の命を、永生を信じている\nあり得ない\n\n俺はまだ死ぬには早いと、嫌々叫んでみても\n本心じゃない\n皆が不快に思うのに、どうやって耐えられよう\n偽善的だ\n\n白い城の姫は祈っていた\n彼女が悩むとき、彼は死ぬべきだった\n肉の腐った王子は閉じ込められていた\n彼が現れたとき、皆が逃げ出した\n軽蔑しながら`
    }
  },
  {
    id: "leaving-the-origin",
    titles: { ko: "원점이탈", en: "Leaving The Origin", es: "Saliendo del Origen", ja: "原点離脱" },
    credits: {
      lyrics: { ko: "손창현", en: "Son Chang-hyun", es: "Son Chang-hyun", ja: "ソン・チャンヒョン" },
      composer: { ko: "김재현, 손창현", en: "Kim Jae-hyun, Son Chang-hyun", es: "Kim Jae-hyun, Son Chang-hyun", ja: "キム・ジェヒョン, ソン・チャンヒョン" }
    },
    theme: {
      ko: "헤어진 이후의 좆같은 기분을 표현했습니다.",
      en: "Expresses the terrible feeling after a breakup.",
      es: "Expresa el terrible sentimiento después de una ruptura.",
      ja: "別れた後の最悪な気分を表現しました。"
    },
    reference: {
      ko: "없음",
      en: "None",
      es: "Ninguno",
      ja: "なし"
    },
    lyrics: {
      ko: `눈이 떠질 때마다\n받아 들이기 싫은\n사실들에 조여져\n몸은 계속 떨려와\n\n마치 녹은 얼음과\n같이 흘러가는걸\n애써 잡으려해도\n안된다는걸 알아\n\n모든게(x3) 원래 없었어\n모든게(x3) 원래 없었어\n\n모두가 내게 말해\n내가 병신이라고\n나도 그정돈 알아\n알지만 못하는 날\n\n모든게(x3) 원래 없었어\n모든게(x3) 원래 없었어\n모든게(x3) 원래 없었어\n모든게(x3) 원래 없었어`,
      en: `Every time my eyes open\nA reality that I can't accept\nKeeps on squeezing me down\nWhile me body continues to shake\n\nLike melting ice\nIt just flows on \nEven if I try to hold on\nI know I never could\n\nEverything(x3) wasn't there from the start\nEverything(x3) wasn't there from the start\n\nEveryone around me says\nThat I'm the dumbass\nThat I already know that\nI know, but I just can't do\n\nEverything(x3) wasn't there from the start\nEverything(x3) wasn't there from the start\nEverything(x3) wasn't there from the start\nEverything(x3) wasn't there from the start`,
      es: `Cuando se abren mis ojos\nUna realidad, que no puedo aceptar\nSigue asfixiandome\nMi cuerpo va temblando\n\nComo el hielo se derrite \nSigue fluyendo\nAunque intento retener\nYa se que no podré\n\nTodo(x3) no existía desde el inicio\nTodo(x3) no existía desde el inicio\n\nTodo el mundo me dice\nQue soy yo el malparido\nEso ya lo sé\nPero nada puedo hacer\n\nTodo(x3) no existía desde el inicio\nTodo(x3) no existía desde el inicio\nTodo(x3) no existía desde el inicio\nTodo(x3) no existía desde el inicio`,
      ja: `目が覚める時は\n受け止めたくない\n事実に締め付けられ\n身体はずっと震えてる\n\n溶けた氷のよう\n一緒に流れってしまうの\n全力で掴もうとしても\n出来ないことってもうわかる\n\n全てが(x3)本来なかった\n全てが(x3)本来なかった\n\n皆僕に言う\n俺がクズって\nそれほどはもうわかってる\nけれど出来ない俺\n\n全てが(x3)本来なかった\n全てが(x3)本来なかった\n全てが(x3)本来なかった\n全てが(x3)本来なかった`
    }
  },
  {
    id: "candleman",
    titles: { ko: "캔들맨", en: "Candleman", es: "Candleman", ja: "キャンドルマン" },
    credits: {
      lyrics: { ko: "오준명, 손창현", en: "Oh Jun-myung, Son Chang-hyun", es: "Oh Jun-myung, Son Chang-hyun", ja: "オ・ジュンミョン, ソン・チャンヒョン" },
      composer: { ko: "김재현, 손창현, 정민구", en: "Kim Jae-hyun, Son Chang-hyun, Jeong Min-gu", es: "Kim Jae-hyun, Son Chang-hyun, Jeong Min-gu", ja: "キム・ジェヒョン, ソン・チャンヒョン, チョン・ミング" }
    },
    theme: {
      ko: "투자로 인생을 망친 20대 남자의 이야기입니다. 곡명의 '캔들'은 주식/코인 캔들차트에서 유래했습니다.",
      en: "The story of a young man in his 20s who ruined his life by investing. 'Candle' refers to a candlestick chart.",
      es: "La historia de un joven de 20 años que arruinó su vida invirtiendo. 'Candle' se refiere a un gráfico de velas.",
      ja: "投資で人生が破滅した20代の男性のストーリーです。キャンドルはキャンドルチャートのキャンドル（ローソク足）に由来します。"
    },
    reference: {
      ko: "2021년 비트코인 상승장, 2026년 주식 상승장",
      en: "2021 Bitcoin Bull Market, 2026 Stock Bull Market",
      es: "Mercado alcista de Bitcoin en 2021, Mercado alcista de acciones en 2026",
      ja: "2021年ビットコイン上昇相場, 2026年株式上昇相場"
    },
    lyrics: {
      ko: `개미집을 지어놨어\n모든걸 끌어다 지었어\n빗자루질 한방에 다\n모든게 박살이 났어\n\n내가 세운 계획이 다\n휴지조각이 되었어\n내가 세운 계획이 다\n휴지조각이 되었어\n\n모든걸 다 끌어모은\n내 바벨탑이 무너졌어\n모든걸 끌어모아서\n또다시 지어보겠어\n\n내리막길은 언젠가\n끝을찍고 올라가\n정신승리가 아니면\n버티기가 힘들어\n\n내가 세운 계획이 다\n휴지조각이 되었어\n내가 세운 계획이 다\n휴지조각이 되었어`,
      en: `I built an anthill\nI dragged in everything and built it\nWith one sweep of a broom\nEverything was smashed to pieces\n\nAll the plans I made\nTurned into scraps of paper\nAll the plans I made\nTurned into scraps of paper\n\nI gathered everything\nMy tower of Babel collapsed\nI'll gather everything\nAnd build it again\n\nA downhill road, someday\nHits the end and climbs back up\nIf it isn't a mental victory\nIt's hard to hold on\n\nAll the plans I made\nTurned into scraps of paper\nAll the plans I made\nTurned into scraps of paper`,
      es: `Construí un hormiguero\nArrastré de todo y lo levanté\nDe un solo escobazo\nTodo quedó hecho pedazos\n\nTodos los planes que hice\nSe volvieron pedazos de papel\nTodos los planes que hice\nSe volvieron pedazos de papel\n\nJunté todo\nMi torre de Babel se derrumbó\nVoy a juntar todo\nY volveré a construir\n\nLa bajada, algún día\nToca el final y vuelve a subir\nSi no es una victoria mental\nEs difícil aguantar\n\nTodos los planes que hice\nSe volvieron pedazos de papel\nTodos los planes que hice\nSe volvieron pedazos de papel`,
      ja: `蟻塚を作っておいた\n全部かき集めて作った\nほうきでひと掃きしただけで\n全部が粉々になった\n\n俺が立てた計画は全部\n紙くずになった\n俺が立てた計画は全部\n紙くずになった\n\n全部をかき集めた\n俺のバベルの塔が崩れた\n全部かき集めて\nまた建ててみる\n\n下り坂はいつか\n底を打って上がっていく\n精神勝利じゃなければ\n踏ん張るのはきつい\n\n俺が立てた計画は全部\n紙くずになった\n俺が立てた計画は全部\n紙くずになった`
    }
  },
  {
    id: "black-rain",
    titles: { ko: "검은비", en: "Black Rain", es: "Lluvia Negra", ja: "黒い雨" },
    isInstrumental: true,
    credits: {
      lyrics: { ko: "-", en: "-", es: "-", ja: "-" },
      composer: { ko: "김재현, 오준명", en: "Kim Jae-hyun, Oh Jun-myung", es: "Kim Jae-hyun, Oh Jun-myung", ja: "キム・ジェヒョン, オ・ジュンミョン" }
    },
    theme: {
      ko: "핵폭발 이후 낙진과 함께 떨어지는 검은 비를 묘사한 연주곡입니다.",
      en: "An instrumental track describing the black rain that falls with radioactive fallout after a nuclear explosion.",
      es: "Una pieza instrumental que describe la lluvia negra que cae junto con la lluvia radiactiva después de una explosión nuclear.",
      ja: "核爆発の後、放射性降下物とともに降る黒い雨を表現したインストゥルメンタル曲です。"
    },
    reference: {
      ko: "영화 '검은 비' (이마무라 쇼헤이 감독)",
      en: "Movie 'Black Rain' (directed by Shohei Imamura)",
      es: "Película 'Lluvia Negra' (dirigida por Shohei Imamura)",
      ja: "映画「黒い雨」（今村昌平監督）"
    },
    lyrics: { ko: "", en: "", es: "", ja: "" }
  },
  {
    id: "hannam-bridge",
    titles: { ko: "한남대교", en: "Hannam Bridge", es: "Puente Hannam", ja: "漢南大橋" },
    credits: {
      lyrics: { ko: "손창현, 오준명", en: "Son Chang-hyun, Oh Jun-myung", es: "Son Chang-hyun, Oh Jun-myung", ja: "ソン・チャンヒョン, オ・ジュンミョン" },
      composer: { ko: "손창현", en: "Son Chang-hyun", es: "Son Chang-hyun", ja: "ソン・チャンヒョン" }
    },
    theme: {
      ko: "가수 혜은이의 '제3한강교'를 모티브로 삼았으며, 원나잇 스탠드 이후의 쓸쓸함과 공허함을 담은 곡입니다.",
      en: "Inspired by Hye Eun-yi's 'The 3rd Han River Bridge', capturing the loneliness and emptiness after a one-night stand.",
      es: "Inspirado en 'El tercer puente del río Han' de Hye Eun-yi, capturando la soledad y el vacío después de una aventura de una noche.",
      ja: "歌手ヘウニの『第3漢江橋』をモチーフにしており、ワンナイトスタンドの後の寂しさと虚しさを描いた曲です。"
    },
    reference: {
      ko: "혜은이 - 제3한강교",
      en: "Hye Eun-yi - The 3rd Han River Bridge",
      es: "Hye Eun-yi - El tercer puente del río Han",
      ja: "ヘウニ - 제3한강교"
    },
    lyrics: {
      ko: `아무것도 아니었지\n우리가 처음 만났던 그날은\n왠지 추워지고 있었고\n아무것도 아니었지\n우리가 처음 나눴던 그말은\n왠지 취해가고 있었고\n\n그날 처음 만났던 우리는\n어딘가서 하나가 되었고\n날이밝아 헤어진 우리는\n이름 모를 거리로 나갔지\n그날 처음 만났던 우리는\n어딘가서 하나가 되었고\n날이밝아 헤어진 우리는\n이름 모를 거리로 나갔지\n\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n\n그날 처음 만났던 우리는\n어딘가서 하나가 되었고\n날이밝아 헤어진 우리는\n이름 모를 거리로 나갔지\n그날 처음 만났던 우리는\n어딘가서 하나가 되었고\n날이밝아 헤어진 우리는\n이름 모를 거리로 나갔지\n\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지`,
      en: `It was really nothing\nThe day we first met\nWas turning a bit colder for some reason\nIt was really nothing\nThe words we first exchanged\nWas getting a bit tipsy for some reason\n\nThe two of us that first met on that day\nWe became one somewhere\nAs dawn broke, we parted ways\nAnd we headed to a nameless street\nThe two of us that first met on that day\nWe became one somewhere\nAs dawn broke, we parted ways\nAnd we headed to a nameless street\n\nNothing really happened\nNothing really happened\nNothing really happened\nNothing really happened\nNothing really happened\nNothing really happened\nNothing really happened\nNothing really happened\n\nThe two of us that first met on that day\nWe became one somewhere\nAs dawn broke, we parted ways\nAnd we headed to a nameless street\nThe two of us that first met on that day\nWe became one somewhere\nAs dawn broke, we parted ways\nAnd we headed to a nameless street\n\nNothing really happened\nNothing really happened\nNothing really happened\nNothing really happened\nNothing really happened\nNothing really happened\nNothing really happened\nNothing really happened`,
      es: `No fue nada\nEl dia que nos encontramos \nHacía más frío por algún motivo\nNo fue nada\nLas primeras palabras que intercambiamos\nEstaban emborrachándose por algún motivo\n\nLos dos que nos encontramos ese día\nEn algún lugar, volvimos uno\nAl amanecer, nos separamos\nY salimos a una calle sin nombre \nLos dos que nos encontramos ese día\nEn algún lugar, volvimos uno\nAl amanecer, nos separamos\nY salimos a una calle sin nombre \n\nNo pasó nada\nNo pasó nada\nNo pasó nada\nNo pasó nada\nNo pasó nada\nNo pasó nada\nNo pasó nada\nNo pasó nada\n\nLos dos que nos encontramos ese día\nEn algún lugar, volvimos uno\nAl amanecer, nos separamos\nY salimos a una calle sin nombre \nLos dos que nos encontramos ese día\nEn algún lugar, volvimos uno\nAl amanecer, nos separamos\nY salimos a una calle sin nombre \n\nNo pasó nada\nNo pasó nada\nNo pasó nada\nNo pasó nada\nNo pasó nada\nNo pasó nada\nNo pasó nada\nNo pasó nada`,
      ja: `何でもなかったね\n僕らが初めてあったあの日は\nなんか寒くなっていた\n何でもなかったね\n僕らが初めて交わした言葉は\nなんか酔い始めていた\n\nあの日初めて会った僕らは\nどこかで一つになり\n夜明けに別れた僕らは\n名前のない街へ向かった\nあの日初めて会った僕らは\nどこかで一つになり\n夜明けに別れた僕らは\n名前のない街へ向かった\n\n何もなかったね\n何もなかったね\n何もなかったね\n何もなかったね\n何もなかったね\n何もなかったね\n何もなかったね\n何もなかったね\n\nあの日初めて会った僕らは\nどこかで一つになり\n夜明けに別れた僕らは\n名前のない街へ向かった\nあの日初めて会った僕らは\nどこかで一つになり\n夜明けに別れた僕らは\n名前のない街へ向かった\n\n何もなかったね\n何もなかったね\n何もなかったね\n何もなかったね\n何もなかったね\n何もなかったね\n何もなかったね\n何もなかったね`
    }
  },
  {
    id: "deja-vu",
    titles: { ko: "기시감", en: "Deja Vu", es: "Deja Vu", ja: "既視感" },
    credits: {
      lyrics: { ko: "오준명", en: "Oh Jun-myung", es: "Oh Jun-myung", ja: "オ・ジュンミョン" },
      composer: { ko: "김재현, 손창현", en: "Kim Jae-hyun, Son Chang-hyun", es: "Kim Jae-hyun, Son Chang-hyun", ja: "キム・ジェヒョン, ソン・チャンヒョン" }
    },
    theme: {
      ko: "짝사랑하던 사람의 부고 소식을 들은 후, 새로 만난 연인들에게서 왠지 모르게 그녀의 모습을 발견하며 느끼는 기시감을 노래합니다.",
      en: "Upon hearing news of the passing of an unrequited love, the protagonist experiences déjà vu as subsequent lovers somehow resemble her.",
      es: "Al enterarse de la muerte de un amor no correspondido, el protagonista experimenta un déjà vu ya que las amantes posteriores se parecen a ella de alguna manera.",
      ja: "片思いしていた人の訃報を聞いた後、新しく出会った恋人たちからなぜか彼女の面影を見出してしまう既視感を歌っています。"
    },
    reference: {
      ko: "없음",
      en: "None",
      es: "Ninguno",
      ja: "なし"
    },
    lyrics: {
      ko: `오늘만난 그 여자애\n어디선가 본것만 같아\n검은 눈에 검은 머리\n어디서도 볼 수 있는 데\n\n분위기가 뭔가 비슷했어\n예전에도 분명 그랬어\n\n결코 이뤄지진 않지만\n자석처럼 따라 가나봐\n\n이제는 만날 때마다 느껴\n만날 때마다 그렇게 느껴\n이제는 만날 때마다 느껴\n만날 때마다 그렇게 느껴`,
      en: `That girl I met today\nFeels like I've seen her somewhere\nBlack eyes and black hair\nThe kind you can see anywhere\n\nSomething in the vibe felt similar\nIt was definitely like this before too\n\nIt never really comes true\nBut I guess I follow like a magnet\n\nNow I feel it every time I meet her\nEvery time, I feel it like that\nNow I feel it every time I meet her\nEvery time, I feel it like that`,
      es: `La chica que conocí hoy\nSiento que la he visto en alguna parte\nOjos negros y pelo negro\nDe los que puedes ver en cualquier lado\n\nHabía algo parecido en su ambiente\nAntes también foi así, seguro\n\nNunca llega a cumplirse\nPero supongo que la sigo como un imán\n\nAhora lo siento cada vez que la veo\nCada vez lo siento así\nAhora lo siento cada vez que la veo\nCada vez lo siento así`,
      ja: `今日会ったあの子\nどこかで見た気がする\n黒い目に黒い髪\nどこにでもいるような\n\n雰囲気がどこか似ていた\n前にも確かにそうだった\n\n決して叶いはしないけど\n磁石みたいに追ってしまうみたいだ\n\nもう会うたびに感じる\n会うたびにそう感じる\nもう会うたびに感じる\n会うたびにそう感じる`
    }
  },
  {
    id: "mimong",
    titles: { ko: "미몽", en: "Daydream", es: "Ensoñación", ja: "迷夢" },
    credits: {
      lyrics: { ko: "손창현", en: "Son Chang-hyun", es: "Son Chang-hyun", ja: "ソン・チャンヒョン" },
      composer: { ko: "김재현, 손창현", en: "Kim Jae-hyun, Son Chang-hyun", es: "Kim Jae-hyun, Son Chang-hyun", ja: "キム・ジェヒョン, ソン・チャンヒョン" }
    },
    theme: {
      ko: "꿈결 같은 몽환적 기분과 현실 감각이 희미해진 비현실적인 상황을 표현했습니다.",
      en: "Expresses a dream-like, hazy state and an unrealistic situation where the sense of reality is faded.",
      es: "Expresa un estado onírico y brumoso, y una situación irreal donde el sentido de la realidad se desvanece.",
      ja: "夢の中のような夢幻的な気分と、現実感が薄れた非現実的な状況を表現しました。"
    },
    reference: {
      ko: "검은 비, 기시감",
      en: "Black Rain, Deja Vu",
      es: "Lluvia Negra, Deja Vu",
      ja: "黒い雨, 既視感"
    },
    lyrics: {
      ko: `넌 말했지 잘 가라고 나는 알았어 이게 다인걸\n시간 지나면 흩어지겠지 별거아닌거 누가 모를까\n공허한 느낌 약간 아쉬움 말하지 못해 담아 두는데\n나는 또다시 갈증이 나서 반복하겠지 같은 일들을\n\n*발 *같은년`,
      en: `You said goodbye, and I knew this was the end\nIt will scatter as time goes by, who doesn't know it's no big deal\nAn empty feeling, a bit of regret, I keep it inside without saying a word\nBut I get thirsty again, and I'll probably repeat the same things\n\nF*cking b*tch`,
      es: `Dijiste adiós y supe que esto era todo\nSe dispersará con el tiempo, quién no sabe que no es gran cosa\nUn sentimiento vacío, un poco de arrepentimiento, me lo guardo sin hablar\nPero me da sed otra vez, y probablemente repetiré lo mismo\n\nP*ta de m*erda`,
      ja: `君は言ったね、バイバイと。俺は分かった、これが最後だと\n時間が経てば散っていくさ、大したことないなんて誰でも知ってる\n虚しい気分、少しの名残惜しさ、言えずに秘めているけれど\n俺はまた喉が渇いて、同じことを繰り返すんだろう\n\nク*ソみたいな女`
    }
  },
  {
    id: "hangover",
    titles: { ko: "숙취", en: "Hangover", es: "Resaca", ja: "二日酔い" },
    credits: {
      lyrics: { ko: "김재현, 오준명", en: "Kim Jae-hyun, Oh Jun-myung", es: "Kim Jae-hyun, Oh Jun-myung", ja: "キム・ジェヒョン, オ・ジュンミョン" },
      composer: { ko: "김재현, 손창현", en: "Kim Jae-hyun, Son Chang-hyun", es: "Kim Jae-hyun, Son Chang-hyun", ja: "キム・ジェヒョン, ソン・チャンヒョン" }
    },
    theme: {
      ko: "술을 마신 다음 날 느끼는 좆같은 기분과 혼란스러움을 담아냈습니다.",
      en: "Captures the terrible and confused feelings experienced the day after drinking.",
      es: "Captura los sentimientos terribles y confusos del día siguiente a la bebida.",
      ja: "お酒を飲んだ翌日の最悪な気分と混乱を表現しました。"
    },
    reference: {
      ko: "McCarthy - Red Sleeping Beauty",
      en: "McCarthy - Red Sleeping Beauty",
      es: "McCarthy - Red Sleeping Beauty",
      ja: "McCarthy - Red Sleeping Beauty"
    },
    lyrics: {
      ko: `세상 모든 게 역겹네\n모든 게 후회되지만\n쓸 데 없다는걸 알아\n잠깐만 말 좀 걸지 마\n난 너무 초라해졌어\n물조차 삼킬 수 없는\n머리가 아파오는데\n쪽잠도 잘 수가 없네\n\n어제 이름을 알았던\n검은 머리의 그 여자\n언제 알았냐는 듯이\n빠르게 사라져버려\n어깨동무를 했었던\n빨간 머리의 그 남자\n언제 알았냐는 듯이\n인사도 없이 가버려\n\n잠깐 말 좀 걸지 마\n잠깐 말 좀 걸지 마\n잠깐만 말 좀 걸지 마\n제발 말을 걸지 마\n\n잠깐 말 좀 걸지 마\n잠깐 말 좀 걸지 마\n잠깐만 말 좀 걸지 마\n제발 날 좀 내버려둬\n날 좀 내버려둬\n날 좀  내버려둬`,
      en: `The whole world makes me puke\nEverything gets me to regret\nBut I know it doesn't mean anything\nJust don't talk to me for a sec\nI've become too miserable\nI can't even swallow water\nMy head starts to go dizzy again\nCan't squeeze a nap in here or there\n\nI got to know her name yesterday\nThat girl with dark hair\nAs if she's never known me\nShe disappears in a blink of an eye\nI was shoulder to shoulder with\nThat man with red hair\nBut as if he's never known me\nHe disappears without a goodbye\nJust dont talk to me for a sec\nJust dont talk to me for a sec\nPlease just dont talk to me for a sec\nI beg you dont talk to me for a sec\nJust dont talk to me for a sec\nJust dont talk to me for a sec\nWait just dont talk to me for a sec\nPlease just let me be alone\nJust leave me here alone\nJust let me be alone`,
      es: `Todo el mundo me da asco\nMe lleno de arrepentimiento\nPero ya sé que no sirve para nada\nNo me hables por un rato\nMe volví demasiado miserable\nNi puedo tragar agua\nMe empieza doler la cabeza\nNi puedo echar una siesta más\nConocí a ella ayer\nLa chica con pelo negro\nComo si no me conociera\nDesaparece en un instante\nEl que iba conmigo del brazo \nEl hombre de pelo rojo\nComo no me conociera\nSe va sin un adios\nNo me hables por un rato\nNo me hables por un rato\nNo me hables por solo un rato \nTe ruego que no me hables por un rato\nNo me hables por un rato\nNo me hables por un rato\nNo me hables por un rato\nDejame en paz\nDejame en paz\nDejame estar solo`,
      ja: `世界の全てが吐き気がする\n全て後悔だらけ\n余計だともう知ってる\nちょっと話しかけてないでくれ\n俺はみすぼらしい過ぎる\n水も飲めないほど\n頭がいたくなってくるのに\n昼寝もできないよ\n昨日名前を知った\nあの黒髪の子\n会ったこともないかのように\n速く消えてしまうの\n肩を組んだ\n赤髪のあの男\n会ったこともないかのように\nさよならも言わずに行ったよ\nちょっと話しかけてないでくれ\nちょっと話しかけてないでくれ\nちょっとだけ話しかけてないでくれ\n願うよ、ちょっと話しかけてないでくれ\nちょっと話しかけてないでくれ\nちょっと話しかけてないでくれ\nちょっとだけはなしかけてないでくれ\n俺を放っといてくれ\n放っといてよ\n放っといてよ`
    }
  },
  {
    id: "redpill",
    titles: { ko: "레드필", en: "Red Pill", es: "Píldora Roja", ja: "レッドピル" },
    credits: {
      lyrics: { ko: "김준성", en: "Kim Jun-sung", es: "Kim Jun-sung", ja: "キム・ジュンソン" },
      composer: { ko: "김준성", en: "Kim Jun-sung", es: "Kim Jun-sung", ja: "キム・ジュンソン" }
    },
    theme: {
      ko: "여성에 대한 왜곡된 망상과 피해의식을 자조적으로 표현한 곡입니다.",
      en: "Expresses distorted delusions and victim mentality regarding women in a self-deprecating way.",
      es: "Expresa de manera autocrítica los delirios distorsionados y la mentalidad de víctima respecto a las mujeres.",
      ja: "女性に対する歪んだ妄想と被害妄想を自嘲的に表現した曲です。"
    },
    reference: {
      ko: "앤드류 테이트 유튜브 채널",
      en: "Andrew Tate's YouTube channel",
      es: "Canal de YouTube de Andrew Tate",
      ja: "アンドリュー・テイトのYouTubeチャンネル"
    },
    lyrics: {
      ko: `당신의\n손에 쥐어진\n빨간 약을 난 삼켜버렸고\n무책임하게\n당신을 꿈에 품었네\n날 탓하지 말아줘요\n\n두려움에\n완전히 젖어버린\n나의 꿈속에 남아줘요\n여전히\n난 변한 게 없는데\n세상은 너무 멀어보이네\n\n이미\n없어졌어\n아직\n살아있는데\n나를\n바라봐\n나를\n좋아하라고\n\n모두 다\n죽어버리라고\n소리를 암만 질러봐도\n어지러운\n목소리들만\n계속 메아리치고 있네\n\n이젠 그 무엇도\n아무 소용이 없네\n내가 먼저\n죽어버려야지\n\n이미\n없어졌어\n아직\n살아있는데\n나를\n바라봐\n나를\n좋아하라고`,
      en: `The one\nHeld in your hand\nI swallowed that red pill\nIrresponsibly\nI held you inside my dream\nPlease don't blame me\n\nSoaked\nCompletely in fear\nStay inside my dream\nStill\nNothing in me has changed\nBut the world feels so far away\n\nAlready\nGone\nStill\nAlive\nLook\nAt me\nSay\nYou like me\n\nEven if I scream\nThat everyone\nShould just die\nOnly dizzy\nVoices\nKeep echoing back\n\nNow nothing\nWorks anymore\nI should\nDie first\n\nAlready\nGone\nStill\nAlive\nLook\nAt me\nSay\nYou like me`,
      es: `La que\nLlevabas en la mano\nEsa píldora roja me la tragué\nSin pensar\nTe guardé dentro de mi sueño\nPor favor no me culpes\n\nEmpapado\nCompletamente de miedo\nQuédate dentro de mi sueño\nTodavía\nYo no he cambiado nada\nPero el mundo se ve demasiado lejos\n\nYa\nDesaparecí\nPero aún\nSigo vivo\nMírame\nA mí\nDime\nQue te gusto\n\nAunque grite\nQue todos\nDeberían morirse\nSolo voces\nMareadas\nSiguen haciendo eco\n\nAhora nada\nSirve de nada\nPrimero\nTendría que morir yo\n\nYa\nDesaparecí\nPero aún\nSigo vivo\nMírame\nA mí\nDime\nQue te gusto`,
      ja: `君の\n手の中にあった\n赤い薬を俺は飲み込んで\n無責任に\n君を夢の中に抱えた\n俺を責めないでほしい\n\n恐怖に\nずぶ濡れになった\n俺の夢の中に残ってほしい\n今でも\n俺は何も変わってないのに\n世界は遠すぎて見える\n\nもう\n消えた\nまだ\n生きてるのに\n俺を\n見て\n俺を\n好きになれよ\n\nみんな\n死んでしまえと\nどれだけ叫んでみても\n眩暈みたいな\n声だけが\nずっと反響してる\n\nもう何も\n意味がない\n俺が先に\n死ぬしかない\n\nもう\n消えた\nまだ\n生きてるのに\n俺を\n見て\n俺を\n好きになれよ`
    }
  },
  {
    id: "confession",
    titles: { ko: "고해", en: "Confession", es: "Confesión", ja: "告解" },
    credits: {
      lyrics: { ko: "손창현", en: "Son Chang-hyun", es: "Son Chang-hyun", ja: "ソン・チャンヒョン" },
      composer: { ko: "김재현, 손창현", en: "Kim Jae-hyun, Son Chang-hyun", es: "Kim Jae-hyun, Son Chang-hyun", ja: "キム・ジェヒョン, ソン・チャンヒョン" }
    },
    theme: {
      ko: "헤어진 전 여자친구를 원망하고 헐뜯는 가사를 썼던 자신에 대해, 뒤늦게 부끄러움과 추잡함을 느끼고 용서를 구하는 내용입니다.",
      en: "Reflecting on writing lyrics that blamed and badmouthed an ex-girlfriend, the protagonist feels ashamed and pathetic, repenting and seeking forgiveness.",
      es: "Al reflexionar sobre haber escrito letras que culpaban y criticaban a una exnovia, el protagonista se siente avergonzado y patético, arrepintiéndose y pidiendo perdón.",
      ja: "別れた元カノを恨み、悪く言う歌詞を書いた自分自身に対して、後になって恥ずかしさと卑屈さを覚え、許しを乞う内容です。"
    },
    reference: {
      ko: "없음",
      en: "None",
      es: "Ninguno",
      ja: "なし"
    },
    lyrics: {
      ko: `매일 너를 원망하고\n나는 잘못이 없다고\n그나마 버틸 만해\n이게 나의 사는 태도\n할 게 없어 길을 걷다\n문득 드는 생각인데\n문젠 모두\n내가 만드는 거였어\n\n변한 것은 나였어\n변한 것은 나였어\n변한 것은 나였어\n너의 잘못은 없었어\n\n변한 것은 나였어\n변한 것은 나였어\n변한 것은 나였어\n이젠 돌이킬 수 없어\n\n변한 것을 돌리려고\n기를 쓰고 해봤는데\n안 되는 건\n끝까지 안되었어\n이젠 내가 어떡할지\n아무것도 모르겠고\n찌꺼기만 달라붙어 남아있어\n\n변한 것은 나였어\n변한 것은 나였어\n변한 것은 나였어\n너의 잘못은 없었어\n\n변한 것은 나였어\n변한 것은 나였어\n변한 것은 나였어\n이젠 너무 늦었어`,
      en: `Every day I blame you\nSaying I did nothing wrong\nThat's how I barely keep going\nThat's just how I've been living\nWith nothing to do, I walk the streets\nAnd then a thought hits me\nAll the problems\nWere made by me\n\nThe one who changed was me\nThe one who changed was me\nThe one who changed was me\nNone of this was your fault\n\nThe one who changed was me\nThe one who changed was me\nThe one who changed was me\nNow I can't take it back\n\nI tried with everything I had\nTo turn back what had changed\nBut what won't work\nNever worked till the end\nNow what I'm supposed to do\nI don't know anything anymore\nOnly residue sticks to me and stays\n\nThe one who changed was me\nThe one who changed was me\nThe one who changed was me\nNone of this was your fault\n\nThe one who changed was me\nThe one who changed was me\nThe one who changed was me\nNow it's far too late`,
      es: `Cada día te culpo\nDiciendo que yo no hice nada mal\nAsí es como apenas aguanto\nEsa ha sido mi forma de vivir\nSin nada que hacer, camino por la calle\nY de pronto me pega un pensamiento\nTodos los problemas\nLos estaba haciendo yo\n\nEl que cambió fui yo\nEl que cambió fui yo\nEl que cambió fui yo\nTú no tuviste la culpa\n\nEl que cambió fui yo\nEl que cambió fui yo\nEl que cambió fui yo\nYa no hay forma de volver atrás\n\nLo intenté con todas mis fuerzas\nPara deshacer lo que cambió\nPero lo que no funciona\nNo funcionó hasta el final\nAhora qué se supone que haga\nYa no sé nada\nSolo quedan restos pegados en mí\n\nEl que cambió fui yo\nEl que cambió fui yo\nEl que cambió fui yo\nTú no tuviste la culpa\n\nEl que cambió fui yo\nEl que cambió fui yo\nEl que cambió fui yo\nAhora ya es demasiado tarde`,
      ja: `毎日君を責めて\n自分は悪くないって\nそれでどうにか持ちこたえる\nそれが俺의生き方だった\nすることもなく道を歩いて\nふと思うんだ\n問題は全部\n俺が作っていたって\n\n変わったのは俺だった\n変わったのは俺だった\n変わったのは俺だった\n君は悪くなかった\n\n変わったのは俺だった\n変わったのは俺だった\n変わったのは俺だった\nもう取り戻せない\n\n変わったものを戻そうと\n必死でやってみたけど\n無理なものは\n最後まで無理だった\nもうどうすればいいのか\n何もわからない\nカスだけがまとわりついて残ってる\n\n変わったのは俺だった\n変わったのは俺だった\n変わったのは俺だった\n君は悪くなかった\n\n変わったのは俺だった\n変わったのは俺だった\n変わったのは俺だった\nもう遅すぎる`
    }
  },
  {
    id: "family-pride",
    titles: { ko: "가문의 영광", en: "Family Pride", es: "El Orgullo de La familia", ja: "家門の栄光" },
    credits: {
      lyrics: { ko: "손창현, 오준명", en: "Son Chang-hyun, Oh Jun-myung", es: "Son Chang-hyun, Oh Jun-myung", ja: "ソン・チャンヒョン, オ・ジュンミョン" },
      composer: { ko: "김재현, 손창현", en: "Kim Jae-hyun, Son Chang-hyun", es: "Kim Jae-hyun, Son Chang-hyun", ja: "キム・ジェヒョン, ソン・チャンヒョン" }
    },
    theme: {
      ko: "영화 '우리손자 베스트'에서 영감을 받아 만들었으며, 세대 간의 정치적 갈등을 냉소적으로 다루고 있습니다.",
      en: "Inspired by the movie 'Great Patrioteers', cynically dealing with political conflicts between generations.",
      es: "Inspirada en la película 'Great Patrioteers', aborda cínicamente los conflictos políticos entre generaciones.",
      ja: "映画『わたしの孫ベスト』（Great Patrioteers）から着想を得て作られ、世代間の政治적対立を冷笑的に描いています。"
    },
    reference: {
      ko: "염상섭 소설 '삼대', 김수현 감독 영화 '우리손자 베스트', Pink Floyd - Comfortably Numb",
      en: "Novel 'Three Generations' by Yom Sang-seop, Movie 'Great Patrioteers' directed by Kim Soo-hyun, Pink Floyd - Comfortably Numb",
      es: "Novela 'Tres generaciones' de Yom Sang-seop, Película 'Great Patrioteers' dirigida por Kim Soo-hyun, Pink Floyd - Comfortably Numb",
      ja: "廉想渉の小説『三代』, キム・スヒョン監督の映画『わたしの孫ベスト』, Pink Floyd - Comfortably Numb"
    },
    lyrics: {
      ko: `빨간 약을 드신 우리 할아버지\n유튜브 댓글로 시국을 논하죠\n옳게 된 나라를 만들어 본다고\n비장한 표정으로 나가셨죠\n경찰을 때린 우리 할아버지\n그냥은 못나온다고 하네요\n우리 집안은 애국자 집안\n우리 집안 열사 집안\n\n깨어있는 시민 우리 아버지\n뉴스 공장의 열렬한 시청자\n옳게 된 나라를 만들어본다고\n2찍은 뒤지라고 욕을 해요\n밭갈이에 실패한 우리 아버지\n언제쯤 정신을 차리실까요\n우리 집안은 애국자 집안\n우리 집안은 열사 집안\n\n합리적 보수인 내게 있어서\n인터넷 커뮤는 유일한 해방구\n페미 정치인이 꼴보기 싫다고\n댓글로 여러가질 써놨었죠\n추천 수백개 받는데 성공한 나\n그냥은 못나간다고 하네요\n우리집안은 애국자 집안\n우리 집안은 콩가루 집안`,
      en: `My grandpa, who took the redpill\nTalking about the state of affairs on the youtube comment section\nSaying he'll make this country great again\nLeft home with a solemn face\nMy grandpa, who beat a policeman\nThey can't just cut him loose this time\nOur family's a patriot's family\nOur family's a martyr's family\n\nMy dad, a vigilant citizen\nThe biggest fan of MSNBC\nSaying he'll make this country great again \nSays republicans should go and kill \nthemselves\nMy dad who failed astroturfing\nWhen will he realize what he's done\nOur family's a patriot's family\nOur family's a martyr's family\n\nFor a reasonable conservative like me\nThe internet is the only place where I can be free\nSaying I fucking hate that feminist politician\nI wrote a couple things in the comment section\nI finally got a couple hundred likes\nBut they can't just cut me loose this time\nOur family's a patriot's family\nOur family's a fucked up family`,
      es: `Mi abuelo que tomó la píldora roja\nDebatiendo sobre la nación en los comentarios de youtube\nDiciendo que hará esta patria grande de nuevo\nSalió de casa con una cara solemne\nMi abuelo, que le pegó a un policia\nEsta vez nos dice que no saldría fácil\nNuestra familia es de patriotas\nNuestra familia es de mártires\n\nMi papá un ciudadano consciente\nEl fan #1 de la prensa progre\nDiciendo que hará esta pais grande de nuevo\nGrita que los fachas se mueran\nMi papá que fracasó en su amañado\nCuando se dará cuenta de lo que hace\nNuestra familia es de patriotas\nNuestra familia es de mártires\n\nPara un conservador razonable como yo\nEl internet es mi única liberacion\nDiciendo que me da asco esa politica feminista\nEscribí un par de cosas en los comentarios\nYo que logré conseguir un montón de me gustas\nEsta vez me dice no saldré fácil\nNuestra familia es de patriotas\nNuestra familia ya está hecha polvo`,
      ja: `「赤い薬」を飲んだうちの爺さん \nYouTubeのコメント欄で国を憂い \nこの国を正してみるって\n悲壮な顔で出て行きました\n警察を殴ったうちの爺さん \n今度ばかりは出られないそうです\nうちは愛国者の家系 \nうちは烈士の家系 \n\n「目覚めた市民」うちの父さん\nサヨクのニュース番組の大ファンで \nこの国を正してみるって\n「ネトウヨは死ね」と喚いています\n説得工作に失敗した親父 \nいつになったら目が覚めるんですかね\nうちは愛国者の家系 \nうちは烈士의家系 \n\n「まともな保守」の僕にとって \nネットの掲示板は唯一の解放区 \nフェミ議員マジで嫌いだとか \nコメントに色々書き込みました\nイイネ数百もらうに成功した僕は\n今度ばかりは出られないそうです\nうちは愛国者の家系 \nうちはグズの家系`
    }
  },
  {
    id: "hijack",
    titles: { ko: "하이잭", en: "Hijack", es: "Hijack", ja: "ハイジャック" },
    credits: {
      lyrics: { ko: "손창현", en: "Son Chang-hyun", es: "Son Chang-hyun", ja: "ソン・チャンヒョン" },
      composer: { ko: "김재현, 손창현", en: "Kim Jae-hyun, Son Chang-hyun", es: "Kim Jae-hyun, Son Chang-hyun", ja: "キム・ジェヒョン, ソン・チャンヒョン" }
    },
    theme: {
      ko: "만화가 김성모의 작품들에서 모티브를 얻어 만든 곡입니다.",
      en: "Inspired by the works of cartoonist Kim Sung-mo.",
      es: "Inspirado en las obras del caricaturista Kim Sung-mo.",
      ja: "漫画家キム・ソンモの作品からモチーフを得て作られた曲です。"
    },
    reference: {
      ko: "없음",
      en: "None",
      es: "Ninguno",
      ja: "なし"
    },
    lyrics: {
      ko: `잃을것이 전혀 없던 너에겐\n고운말들이 의미없겠지\n입발린 소린 하지말라고\n괴로워하던 너의 표정은\n\n사실 슬프진 않았던거야\n사실 슬프진 않았던거야\n사실 슬프진 않았던거야\n그냥 슬픈척 했을뿐이야\n\n안절부절하던 너의 몸짓엔\n하기 싫다고 쓰여있었지\n나는 이거밖에 할게 없다고\n괴로워하던 너의 표정은\n\n사실 슬프진 않았던거야\n사실 슬프진 않았던거야\n사실 슬프진 않았던거야\n그냥 슬픈척 했을뿐이야\n\n그냥 슬픈척 했을뿐이야`,
      en: `To you, who had absolutely nothing to lose,\nKind words wouldn't mean a thing.\nTelling me not to say sweet words,\nYour distressed expression—\n\nActually, you weren't sad.\nActually, you weren't sad.\nActually, you weren't sad.\nYou were just pretending to be sad.\n\nIn your restless gestures,\nIt was written that you didn't want to do it.\nSaying "I have nothing else to do but this,"\nYour distressed expression—\n\nActually, you weren't sad.\nActually, you weren't sad.\nActually, you weren't sad.\nYou were just pretending to be sad.\n\nYou were just pretending to be sad.`,
      es: `Para ti, que no tenías absolutamente nada que perder,\nLas palabras bonitas no significarían nada.\nDiciéndome que no te diga palabras dulces,\nTu expresión angustiada—\n\nEn realidad, no estabas triste.\nEn realidad, no estabas triste.\nEn realidad, no estabas triste.\nSolo estabas fingiendo estar triste.\n\nEn tus gestos inquietos,\nEstaba escrito que no querías hacerlo.\nDiciendo "No tengo nada más que hacer excepto esto",\nTu expresión angustiada—\n\nEn realidad, no estabas triste.\nEn realidad, no estabas triste.\nEn realidad, no estabas triste.\nSolo estabas fingiendo estar triste.\n\nSolo estabas fingiendo estar triste.`,
      ja: `失うものが何一つなかった君には\n綺麗な言葉なんて意味がないだろう\nお世辞なんか言うなと\n苦しんでいた君の表情は\n\n実は悲しくなんてなかったんだ\n実は悲しくなんてなかったんだ\n実は悲しくなんてなかったんだ\nただ悲しいふりをしてただけさ\n\nそわそわしていた君の仕草には\nやりたくないと書いてあったね\n俺はこれしかやることがないと\n苦しんでいた君の表情は\n\n実は悲しくなんてなかったんだ\n実は悲しくなんてなかったんだ\n実は悲しくなんてなかったんだ\nただ悲しいふりをしてただけさ\n\nただ悲しいふりをしてただけさ`
    }
  }
];

// 다국어 라벨 및 UI 리소스
const uiLabels = {
  ko: {
    lyricsBy: "작사",
    composedBy: "작곡",
    about: "곡 소개",
    references: "레퍼런스",
    lyricsTitle: "가사",
    slogan: "우리가 실제로 보고 겪은 일들을, 최대한 솔직하게"
  },
  en: {
    lyricsBy: "Lyrics",
    composedBy: "Composed by",
    about: "About",
    references: "References",
    lyricsTitle: "Lyrics",
    slogan: "The things we've actually seen and gone through, as honestly as possible."
  },
  es: {
    lyricsBy: "Letra",
    composedBy: "Composición",
    about: "Sobre la canción",
    references: "Referencias",
    lyricsTitle: "Letra",
    slogan: "Las cosas que realmente hemos visto y vivido, lo más honestamente posible."
  },
  ja: {
    lyricsBy: "作詞",
    composedBy: "作曲",
    about: "曲紹介",
    references: "レファレンス",
    lyricsTitle: "歌詞",
    slogan: "私たちが実際に見て経験したことを、できるだけ正直に"
  }
};

const langList = ["ko", "en", "es", "ja"];
let currentLang = "ko";

function renderSongs() {
  const list = document.getElementById("songs-list");
  if (!list) return;
  list.innerHTML = "";

  const labels = uiLabels[currentLang] || uiLabels.ko;

  lyricsData.forEach((song) => {
    const title = song.titles[currentLang] || song.titles.ko || "";
    // 서브타이틀은 한국어가 아닐 때 한국어 제목을, 한국어일 때는 영어 제목을 띄워 다채롭게 보여줍니다.
    const subtitle = currentLang === "ko" ? (song.titles.en || "") : (song.titles.ko || "");
    const lyricText = song.lyrics[currentLang] || song.lyrics.ko || "";
    const themeText = song.theme[currentLang] || song.theme.ko || "";
    const refText = song.reference[currentLang] || song.reference.ko || "";
    
    const lyricWriter = song.credits.lyrics[currentLang] || song.credits.lyrics.ko || "";
    const composer = song.credits.composer[currentLang] || song.credits.composer.ko || "";

    const block = document.createElement("div");
    block.className = "song-block";
    block.setAttribute("data-id", song.id);

    // 레퍼런스 태그 생성
    let refHtml = "";
    if (refText && refText !== "없음" && refText !== "None" && refText !== "Ninguno" && refText !== "なし") {
      const tags = refText.split(",").map(t => t.trim()).filter(Boolean);
      const tagsHtml = tags.map(tag => `<span class="ref-tag">${tag}</span>`).join("");
      refHtml = `
        <div class="song-section references-section">
          <div class="section-label">${labels.references}</div>
          <div class="ref-tags">${tagsHtml}</div>
        </div>
      `;
    }

    // 가사 및 소개 섹션 HTML
    const isInst = !!song.isInstrumental;
    const lyricsHtml = isInst 
      ? "" 
      : `
        <div class="song-section lyrics-section">
          <div class="section-label">${labels.lyricsTitle}</div>
          <div class="lyrics-text">${lyricText}</div>
        </div>
      `;

    block.innerHTML = `
      <div class="song-title">
        <div class="title-main">
          <span class="title-text">${title}</span>
          ${isInst ? `<span class="instrument-tag">(Instrument)</span>` : ""}
        </div>
        ${subtitle ? `<span class="subtitle">${subtitle}</span>` : ""}
        <span class="toggle-icon">
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </div>
      <div class="song-content">
        <div class="song-credits">
          ${!isInst ? `<span class="credit-item"><strong>${labels.lyricsBy}</strong> ${lyricWriter}</span>` : ""}
          <span class="credit-item"><strong>${labels.composedBy}</strong> ${composer}</span>
        </div>
        
        <div class="song-section theme-section">
          <div class="section-label">${labels.about}</div>
          <div class="theme-text">${themeText}</div>
        </div>
        
        ${refHtml}
        ${lyricsHtml}
      </div>
    `;

    // 토글 이벤트 처리
    block.querySelector(".song-title").addEventListener("click", () => {
      block.classList.toggle("open");
    });

    list.appendChild(block);
  });
}

function setLang(lang) {
  currentLang = lang;
  
  // 버튼 활성화 클래스 변경
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // 슬로건 다국어 업데이트
  const sloganEl = document.getElementById("slogan");
  if (sloganEl) {
    sloganEl.textContent = uiLabels[lang].slogan;
  }

  renderSongs();
}

document.addEventListener("DOMContentLoaded", () => {
  // 언어 스위치 버튼 이벤트 등록
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  // 초기 언어 설정 및 렌더링
  setLang(currentLang);
});
