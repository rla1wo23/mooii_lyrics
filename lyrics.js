// 곡별 다국어 가사 데이터
const lyricsData = [
  {
    titles: { ko: "숙취", en: "Hangover", es: "Resaca", ja: "二日酔い" },
    lyrics: {
      ko: `세상 모든 게 역겹네\n모든 게 후회되지만\n쓸 데 없다는걸 알아\n잠깐만 말 좀 걸지 마\n난 너무 초라해졌어\n물조차 삼킬 수 없는\n머리가 아파오는데\n쪽잠도 잘 수가 없네\n\n어제 이름을 알았던\n검은 머리의 그 여자\n언제 알았냐는 듯이\n빠르게 사라져버려\n어깨동무를 했었던\n빨간 머리의 그 남자\n언제 알았냐는 듯이\n인사도 없이 가버려\n\n잠깐 말 좀 걸지 마\n잠깐 말 좀 걸지 마\n잠깐만 말 좀 걸지 마\n제발 말을 걸지 마\n\n잠깐 말 좀 걸지 마\n잠깐 말 좀 걸지 마\n잠깐만 말 좀 걸지 마\n제발 날 좀 내버려둬\n날 좀 내버려둬\n날 좀  내버려둬`,
      en: `The whole world makes me puke\nEverything gets me to regret\nBut I know it doesn't mean anything\nJust don't talk to me for a sec\nI've become too miserable\nI can't even swallow water\nMy head starts to go dizzy again\nCan't squeeze a nap in here or there\n\nI got to know her name yesterday\nThat girl with dark hair\nAs if she's never known me\nShe disappears in a blink of an eye\nI was shoulder to shoulder with\nThat man with red hair\nBut as if he's never known me\nHe disappears without a goodbye\nJust dont talk to me for a sec\nJust dont talk to me for a sec\nPlease just dont talk to me for a sec\nI beg you dont talk to me for a sec\nJust dont talk to me for a sec\nJust dont talk to me for a sec\nWait just dont talk to me for a sec\nPlease just let me be alone\nJust leave me here alone\nJust let me be alone`,
      es: `Todo el mundo me da asco\nMe lleno de arrepentimiento\nPero ya sé que no sirve para nada\nNo me hables por un rato\nMe volví demasiado miserable\nNi puedo tragar agua\nMe empieza doler la cabeza\nNi puedo echar una siesta más\nConocí a ella ayer\nLa chica con pelo negro\nComo si no me conociera\nDesaparece en un instante\nEl que iba conmigo del brazo \nEl hombre de pelo rojo\nComo no me conociera\nSe va sin un adios\nNo me hables por un rato\nNo me hables por un rato\nNo me hables por solo un rato \nTe ruego que no me hables por un rato\nNo me hables por un rato\nNo me hables por un rato\nNo me hables por un rato\nDejame en paz\nDejame en paz\nDejame estar solo`,
      ja: `世界の全てが吐き気がする\n全て後悔だらけ\n余計だともう知ってる\nちょっと話しかけてないでくれ\n俺はみすぼらしい過ぎる\n水も飲めないほど\n頭がいたくなってくるのに\n昼寝もできないよ\n昨日名前を知った\nあの黒髪の子\n会ったこともないかのように\n速く消えてしまうの\n肩を組んだ\n赤髪のあの男\n会ったこともないかのように\nさよならも言わずに行ったよ\nちょっと話しかけてないでくれ\nちょっと話しかけてないでくれ\nちょっとだけ話しかけてないでくれ\n願うよ、ちょっと話しかけてないでくれ\nちょっと話しかけてないでくれ\nちょっと話しかけてないでくれ\nちょっとだけはなしかけてないでくれ\n俺を放っといてくれ\n放っといてよ\n放っといてよ`,
    },
  },
  {
    titles: {
      ko: "원점이탈",
      en: "Leaving The Origin",
      es: "Saliendo del Origen",
      ja: "原点離脱",
    },
    lyrics: {
      ko: `눈이 떠질 때마다\n받아 들이기 싫은\n사실들에 조여져\n몸은 계속 떨려와\n\n마치 녹은 얼음과\n같이 흘러가는걸\n애써 잡으려해도\n안된다는걸 알아\n\n모든게(x3) 원래 없었어\n모든게(x3) 원래 없었어\n\n모두가 내게 말해\n내가 병신이라고\n나도 그정돈 알아\n알지만 못하는 날\n\n모든게(x3) 원래 없었어\n모든게(x3) 원래 없었어\n모든게(x3) 원래 없었어\n모든게(x3) 원래 없었어`,
      en: `Every time my eyes open\nA reality that I can't accept\nKeeps on squeezing me down\nWhile me body continues to shake\n\nLike melting ice\nIt just flows on \nEven if I try to hold on\nI know I never could\n\nEverything(x3) wasn't there from the start\nEverything(x3) wasn't there from the start\n\nEveryone around me says\nThat I'm the dumbass\nThat I already know that\nI know, but I just can't do\n\nEverything(x3) wasn't there from the start\nEverything(x3) wasn't there from the start\nEverything(x3) wasn't there from the start\nEverything(x3) wasn't there from the start`,
      es: `Cuando se abren mis ojos\nUna realidad, que no puedo aceptar\nSigue asfixiandome\nMi cuerpo va temblando\n\nComo el hielo se derrite \nSigue fluyendo\nAunque intento retener\nYa se que no podré\n\nTodo(x3) no existía desde el inicio\nTodo(x3) no existía desde el inicio\n\nTodo el mundo me dice\nQue soy yo el malparido\nEso ya lo sé\nPero nada puedo hacer\n\nTodo(x3) no existía desde el inicio\nTodo(x3) no existía desde el inicio\nTodo(x3) no existía desde el inicio\nTodo(x3) no existía desde el inicio`,
      ja: `目が覚める時は\n受け止めたくない\n事実に締め付けられ\n身体はずっと震えてる\n\n溶けた氷のよう\n一緒に流れってしまうの\n全力で掴もうとしても\n出来ないことってもうわかる\n\n全てが(x3)本来なかった\n全てが(x3)本来なかった\n\n皆僕に言う\n俺がクズって\nそれほどはもうわかってる\nけれど出来ない俺\n\n全てが(x3)本来なかった\n全てが(x3)本来なかった\n全てが(x3)本来なかった\n全てが(x3)本来なかった`,
    },
  },
  {
    titles: {
      ko: "한남대교",
      en: "HannamBridge",
      es: "Puente Hannam",
      ja: "漢南大橋",
    },
    lyrics: {
      ko: `아무것도 아니었지\n우리가 처음 만났던 그날은\n왠지 추워지고 있었고\n아무것도 아니었지\n우리가 처음 나눴던 그말은\n왠지 취해가고 있었고\n\n그날 처음 만났던 우리는\n어딘가서 하나가 되었고\n날이밝아 헤어진 우리는\n이름 모를 거리로 나갔지\n그날 처음 만났던 우리는\n어딘가서 하나가 되었고\n날이밝아 헤어진 우리는\n이름 모를 거리로 나갔지\n\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n\n그날 처음 만났던 우리는\n어딘가서 하나가 되었고\n날이밝아 헤어진 우리는\n이름 모를 거리로 나갔지\n그날 처음 만났던 우리는\n어딘가서 하나가 되었고\n날이밝아 헤어진 우리는\n이름 모를 거리로 나갔지\n\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지\n아무일도 없었지`,
      en: `It was really nothing\nThe day we first met\nWas turning a bit colder for some reason\nIt was really nothing\nThe words we first exchanged\nWas getting a bit tipsy for some reason\n\nThe two of us that first met on that day\nWe became one somewhere\nAs dawn broke, we parted ways\nAnd we headed to a nameless street\nThe two of us that first met on that day\nWe became one somewhere\nAs dawn broke, we parted ways\nAnd we headed to a nameless street\n\nNothing really happened\nNothing really happened\nNothing really happened\nNothing really happened\nNothing really happened\nNothing really happened\nNothing really happened\nNothing really happened\n\nThe two of us that first met on that day\nWe became one somewhere\nAs dawn broke, we parted ways\nAnd we headed to a nameless street\nThe two of us that first met on that day\nWe became one somewhere\nAs dawn broke, we parted ways\nAnd we headed to a nameless street\n\nNothing really happened\nNothing really happened\nNothing really happened\nNothing really happened\nNothing really happened\nNothing really happened\nNothing really happened\nNothing really happened`,
      es: `No fue nada\nEl dia que nos encontramos \nHacía más frío por algún motivo\nNo fue nada\nLas primeras palabras que intercambiamos\nEstaban emborrachándose por algún motivo\n\nLos dos que nos encontramos ese día\nEn algún lugar, volvimos uno\nAl amanecer, nos separamos\nY salimos a una calle sin nombre \nLos dos que nos encontramos ese día\nEn algún lugar, volvimos uno\nAl amanecer, nos separamos\nY salimos a una calle sin nombre \n\nNo pasó nada\nNo pasó nada\nNo pasó nada\nNo pasó nada\nNo pasó nada\nNo pasó nada\nNo pasó nada\nNo pasó nada\n\nLos dos que nos encontramos ese día\nEn algún lugar, volvimos uno\nAl amanecer, nos separamos\nY salimos a una calle sin nombre \nLos dos que nos encontramos ese día\nEn algún lugar, volvimos uno\nAl amanecer, nos separamos\nY salimos a una calle sin nombre \n\nNo pasó nada\nNo pasó nada\nNo pasó nada\nNo pasó nada\nNo pasó nada\nNo pasó nada\nNo pasó nada\nNo pasó nada`,
      ja: `何でもなかったね\n僕らが初めてあったあの日は\nなんか寒くなっていた\n何でもなかったね\n僕らが初めて交わした言葉は\nなんか酔い始めていた\n\nあの日初めて会った僕らは\nどこかで一つになり\n夜明けに別れた僕らは\n名前のない街へ向かった\nあの日初めて会った僕らは\nどこかで一つになり\n夜明けに別れた僕らは\n名前のない街へ向かった\n\n何もなかったね\n何もなかったね\n何もなかったね\n何もなかったね\n何もなかったね\n何もなかったね\n何もなかったね\n何もなかったね\n\nあの日初めて会った僕らは\nどこかで一つになり\n夜明けに別れた僕らは\n名前のない街へ向かった\nあの日初めて会った僕らは\nどこかで一つになり\n夜明けに別れた僕らは\n名前のない街へ向かった\n\n何もなかったね\n何もなかったね\n何もなかったね\n何もなかったね\n何もなかったね\n何もなかったね\n何もなかったね\n何もなかったね`,
    },
  },
  {
    titles: {
      ko: "핑크팰리스",
      en: "Pink Palace",
      es: "Pink Palace",
      ja: "ピンクパレス",
    },
    lyrics: {
      ko: `당신들의 나신을 볼 수 없었지\n성은 빨간 곳에서 무너져갔지\n가장 추하게\n\n사람들은 축복을 전혀 모르고\n헛된 영원한 삶을 영생을 믿네\n말도 안되는\n\n난 아직 죽기 이르다고 마지못해 소리치지만\n진심은 아냐\n모두가 불편해하는데 어떻게 견딜수 있겠어\n위선적이야\n\n하얀 성의 공주는 기도를 했네\n그녀가 고민할때 죽어야 했네\n살이 썩은 왕자는 갇혀있었네\n그가 나타났을때 모두 피했네\n경멸하면서`,
      en: `I could never see, your naked bodies\nThe castle crumbled down, from the reddest place\nSo gracelessly\n\nPeople know nothing about the blessings they've been given\nThey believe in idle eternal life, everlasting for them\nIt doesn't make any sense \n\nI'm screaming I can’t die just yet, only because I guess that's what I must do\nit's not what I really want\nIf no one can even stand me, how am I even supposed to bear\nIt's so hypocritical\n\nThe princess inside a white castle she prayed\nAs she started to doubt, he had to face death\nThe prince with rotting skin, hidden behind his cage\nWhen he came in their view, they all ran away\nDespising and loathing him`,
      es: `Nunca podía ver, sus cuerpos desnudos \nEl castillo se desmenuzó, desde el lugar más rojo\nDesagradablemente\n\nLa gente no sabe nada, sobre sus bendiciones\nCreen en vacías vidas perpetuas, eternas también\nNo tiene ningún sentido\n\nGrito que ya no puedo morir, porque supongo que eso debo hacer\nPero no es lo que realmente quiero\nSi nadie puede soportarme, como debo aguantar\nEs tan hipocrita\n\nLa princesa en el castillo blanco, rezó\nCuando empezó dudar, él tuvo que morir\nEl príncipe con la piel podrida, en su jaula detenido\nCuando apareció en la vista, todo el mundo huyó\nDespreciandolo`,
      ja: `貴方らの裸身は、見えなかった\nセイは真っ赤場所から崩れっていた\n最も醜く\n\n人々は祝福を全く知らず\n無駄な永遠の人生を、永生を信じる\nありえない\n\n俺はまだ死ぬわけにはいかん、渋々叫んでみても\n本心じゃない\n皆が不愉快と思うのに、どうやって我慢すればいい\n偽善的よ\n\n白い城のお姫様は、祈っていた\n彼女が悩む時、彼は死ぬべきだった\n肌が腐った王子は、閉じ込められていた\n彼が現れて、皆が逃げた\n軽蔑しながら`,
    },
  },
  {
    titles: {
      ko: "블루 하와이",
      en: "Blue Hawaii",
      es: "Blue Hawaii",
      ja: "ブルーハワイ",
    },
    lyrics: {
      ko: `불을 붙혀놓고\n태워 버리려 했었지\n즐거운 모습들이\n배알이 너무 꼴려서\n\n날 좀 봐달라고\n목구멍 끝까지 차올랐어\n계속 이럴거면\n나도 가만있지 않을거야\n\n전부 겁을 먹게 만들거야\n전부 겁을 먹게 만들거야\n전부 겁을 먹게 만들거야\n전부 겁을 먹게 만들거야\n전부 겁을 먹게 만들거야\n전부 겁을 먹게 만들거야`,
      en: `I set the fire alight\nAnd I tried to burn it all\nThose happy faces\nThey'd drive me fucking crazy \n\nWould you look at me\nThose words were stuck in my throat\nIf you keep acting like this\nI won't just stay put anymore\n\nI'll scare the hell out of them\nI'll scare the hell out of them\nI'll scare the hell out of them\nI'll scare the hell out of them\nI'll scare the hell out of them\nI'll scare the hell out of them`,
      es: `Encendí el fuego\nY intenté arder todo\nSus caras felices\nMe carcomieron con rabia\n\nMiren me\nLas palabras estuve a punto de decir\nSi sigan así\nNo voy a estar tranquilo no más\n\nLes voy a aterrorizar a todos\nLes voy a aterrorizar a todos\nLes voy a aterrorizar a todos\nLes voy a aterrorizar a todos\nLes voy a aterrorizar a todos\nLes voy a aterrorizar a todos`,
      ja: `火をつけたまま\n焼こうとした\nあの楽しい姿に\n腹が立ってしまって\n\n俺を見てくれ\n喉まで出かかっていた\nこのまま続くと\n静かにいる訳じゃないんだぞ\n\n全部こわがらせるぞ\n全部こわがらせるぞ\n全部こわがらせるぞ\n全部こわがらせるぞ\n全部こわがらせるぞ\n全部こわがらせるぞ`,
    },
  },
  {
    titles: {
      ko: "가문의 영광",
      en: "Family Pride",
      es: "El Orgullo de La familia",
      ja: "家門の栄光",
    },
    lyrics: {
      ko: `빨간 약을 드신 우리 할아버지\n유튜브 댓글로 시국을 논하죠\n옳게 된 나라를 만들어 본다고\n비장한 표정으로 나가셨죠\n경찰을 때린 우리 할아버지\n그냥은 못나온다고 하네요\n우리 집안은 애국자 집안\n우리 집안 열사 집안\n\n깨어있는 시민 우리 아버지\n뉴스 공장의 열렬한 시청자\n옳게 된 나라를 만들어본다고\n2찍은 뒤지라고 욕을 해요\n밭갈이에 실패한 우리 아버지\n언제쯤 정신을 차리실까요\n우리 집안은 애국자 집안\n우리 집안은 열사 집안\n\n합리적 보수인 내게 있어서\n인터넷 커뮤는 유일한 해방구\n페미 정치인이 꼴보기 싫다고\n댓글로 여러가질 써놨었죠\n추천 수백개 받는데 성공한 나\n그냥은 못나간다고 하네요\n우리집안은 애국자 집안\n우리 집안은 콩가루 집안`,
      en: `My grandpa, who took the redpill\nTalking about the state of affairs on the youtube comment section\nSaying he'll make this country great again\nLeft home with a solemn face\nMy grandpa, who beat a policeman\nThey can't just cut him loose this time\nOur family's a patriot's family\nOur family's a martyr's family\n\nMy dad, a vigilant citizen\nThe biggest fan of MSNBC\nSaying he'll make this country great again \nSays republicans should go and kill \nthemselves\nMy dad who failed astroturfing\nWhen will he realize what he's done\nOur family's a patriot's family\nOur family's a martyr's family\n\nFor a reasonable conservative like me\nThe internet is the only place where I can be free\nSaying I fucking hate that feminist politician\nI wrote a couple things in the comment section\nI finally got a couple hundred likes\nBut they can't just cut me loose this time\nOur family's a patriot's family\nOur family's a fucked up family`,
      es: `Mi abuelo que tomó la píldora roja\nDebatiendo sobre la nación en los comentarios de youtube\nDiciendo que hará esta patria grande de nuevo\nSalió de casa con una cara solemne\nMi abuelo, que le pegó a un policia\nEsta vez nos dice que no saldría fácil\nNuestra familia es de patriotas\nNuestra familia es de mártires\n\nMi papá un ciudadano consciente\nEl fan #1 de la prensa progre\nDiciendo que hará esta pais grande de nuevo\nGrita que los fachas se mueran\nMi papá que fracasó en su amañado\nCuando se dará cuenta de lo que hace\nNuestra familia es de patriotas\nNuestra familia es de mártires\n\nPara un conservador razonable como yo\nEl internet es mi única liberacion\nDiciendo que me da asco esa politica feminista\nEscribí un par de cosas en los comentarios\nYo que logré conseguir un montón de me gustas\nEsta vez me dice no saldré fácil\nNuestra familia es de patriotas\nNuestra familia ya está hecha polvo`,
      ja: `「赤い薬」を飲んだうちの爺さん \nYouTubeのコメント欄で国を憂い \nこの国を正してみるって\n悲壮な顔で出て行きました\n警察を殴ったうちの爺さん \n今度ばかりは出られないそうです\nうちは愛国者の家系 \nうちは烈士の家系 \n\n「目覚めた市民」うちの父さん\nサヨクのニュース番組の大ファンで \nこの国を正してみるって\n「ネトウヨは死ね」と喚いています\n説得工作に失敗した親父 \nいつになったら目が覚めるんですかね\nうちは愛国者の家系 \nうちは烈士の家系 \n\n「まともな保守」の僕にとって \nネットの掲示板は唯一の解放区 \nフェミ議員マジで嫌いだとか \nコメントに色々書き込みました\nイイネ数百もらうに成功した僕は\n今度ばかりは出られないそうです\nうちは愛国者の家系 \nうちはグズの家系`,
    },
  },
  {
    titles: {
      ko: "캔들맨",
      en: "Candleman",
      es: "Candleman",
      ja: "キャンドルマン",
    },
    lyrics: {
      ko: `개미집을 지어놨어\n모든걸 끌어다 지었어\n빗자루질 한방에 다\n모든게 박살이 났어\n\n내가 세운 계획이 다\n휴지조각이 되었어\n내가 세운 계획이 다\n휴지조각이 되었어\n\n모든걸 다 끌어모은\n내 바벨탑이 무너졌어\n모든걸 끌어모아서\n또다시 지어보겠어\n\n내리막길은 언젠가\n끝을찍고 올라가\n정신승리가 아니면\n버티기가 힘들어\n\n내가 세운 계획이 다\n휴지조각이 되었어\n내가 세운 계획이 다\n휴지조각이 되었어`,
      en: `I built an anthill\nI dragged in everything and built it\nWith one sweep of a broom\nEverything was smashed to pieces\n\nAll the plans I made\nTurned into scraps of paper\nAll the plans I made\nTurned into scraps of paper\n\nI gathered everything\nMy tower of Babel collapsed\nI'll gather everything\nAnd build it again\n\nA downhill road, someday\nHits the end and climbs back up\nIf it isn't a mental victory\nIt's hard to hold on\n\nAll the plans I made\nTurned into scraps of paper\nAll the plans I made\nTurned into scraps of paper`,
      es: `Construí un hormiguero\nArrastré de todo y lo levanté\nDe un solo escobazo\nTodo quedó hecho pedazos\n\nTodos los planes que hice\nSe volvieron pedazos de papel\nTodos los planes que hice\nSe volvieron pedazos de papel\n\nJunté todo\nMi torre de Babel se derrumbó\nVoy a juntar todo\nY volveré a construir\n\nLa bajada, algún día\nToca el final y vuelve a subir\nSi no es una victoria mental\nEs difícil aguantar\n\nTodos los planes que hice\nSe volvieron pedazos de papel\nTodos los planes que hice\nSe volvieron pedazos de papel`,
      ja: `蟻塚を作っておいた\n全部かき集めて作った\nほうきでひと掃きしただけで\n全部が粉々になった\n\n俺が立てた計画は全部\n紙くずになった\n俺が立てた計画は全部\n紙くずになった\n\n全部をかき集めた\n俺のバベルの塔が崩れた\n全部かき集めて\nまた建ててみる\n\n下り坂はいつか\n底を打って上がっていく\n精神勝利じゃなければ\n踏ん張るのはきつい\n\n俺が立てた計画は全部\n紙くずになった\n俺が立てた計画は全部\n紙くずになった`,
    },
  },
  {
    titles: {
      ko: "기시감",
      en: "Deja Vu",
      es: "Deja Vu",
      ja: "既視感",
    },
    lyrics: {
      ko: `오늘만난 그 여자애\n어디선가 본것만 같아\n검은 눈에 검은 머리\n어디서도 볼 수 있는 데\n\n분위기가 뭔가 비슷했어\n예전에도 분명 그랬어\n\n결코 이뤄지진 않지만\n자석처럼 따라 가나봐\n\n이제는 만날 때마다 느껴\n만날 때마다 그렇게 느껴\n이제는 만날 때마다 느껴\n만날 때마다 그렇게 느껴`,
      en: `That girl I met today\nFeels like I've seen her somewhere\nBlack eyes and black hair\nThe kind you can see anywhere\n\nSomething in the vibe felt similar\nIt was definitely like this before too\n\nIt never really comes true\nBut I guess I follow like a magnet\n\nNow I feel it every time I meet her\nEvery time, I feel it like that\nNow I feel it every time I meet her\nEvery time, I feel it like that`,
      es: `La chica que conocí hoy\nSiento que la he visto en alguna parte\nOjos negros y pelo negro\nDe los que puedes ver en cualquier lado\n\nHabía algo parecido en su ambiente\nAntes también fue así, seguro\n\nNunca llega a cumplirse\nPero supongo que la sigo como un imán\n\nAhora lo siento cada vez que la veo\nCada vez lo siento así\nAhora lo siento cada vez que la veo\nCada vez lo siento así`,
      ja: `今日会ったあの子\nどこかで見た気がする\n黒い目に黒い髪\nどこにでもいるような\n\n雰囲気がどこか似ていた\n前にも確かにそうだった\n\n決して叶いはしないけど\n磁石みたいに追ってしまうみたいだ\n\nもう会うたびに感じる\n会うたびにそう感じる\nもう会うたびに感じる\n会うたびにそう感じる`,
    },
  },
  {
    titles: {
      ko: "고해",
      en: "Confession",
      es: "Confesión",
      ja: "告解",
    },
    lyrics: {
      ko: `[Verse 1]\n매일 너를 원망하고\n나는 잘못이 없다고\n그나마 버틸 만해\n이게 나의 사는 태도\n할 게 없어 길을 걷다\n문득 드는 생각인데\n문젠 모두\n내가 만드는 거였어\n\n[Chorus]\n변한 것은 나였어\n변한 것은 나였어\n변한 것은 나였어\n너의 잘못은 없었어\n\n변한 것은 나였어\n변한 것은 나였어\n변한 것은 나였어\n이젠 돌이킬 수 없어\n\n[Verse 2]\n변한 것을 돌리려고\n기를 쓰고 해봤는데\n안 되는 건\n끝까지 안되었어\n이젠 내가 어떡할지\n아무것도 모르겠고\n찌꺼기만 달라붙어 남아있어\n\n[Chorus]\n변한 것은 나였어\n변한 것은 나였어\n변한 것은 나였어\n너의 잘못은 없었어\n\n변한 것은 나였어\n변한 것은 나였어\n변한 것은 나였어\n이젠 너무 늦었어`,
      en: `[Verse 1]\nEvery day I blame you\nSaying I did nothing wrong\nThat's how I barely keep going\nThat's just how I've been living\nWith nothing to do, I walk the streets\nAnd then a thought hits me\nAll the problems\nWere made by me\n\n[Chorus]\nThe one who changed was me\nThe one who changed was me\nThe one who changed was me\nNone of this was your fault\n\nThe one who changed was me\nThe one who changed was me\nThe one who changed was me\nNow I can't take it back\n\n[Verse 2]\nI tried with everything I had\nTo turn back what had changed\nBut what won't work\nNever worked till the end\nNow what I'm supposed to do\nI don't know anything anymore\nOnly residue sticks to me and stays\n\n[Chorus]\nThe one who changed was me\nThe one who changed was me\nThe one who changed was me\nNone of this was your fault\n\nThe one who changed was me\nThe one who changed was me\nThe one who changed was me\nNow it's far too late`,
      es: `[Verso 1]\nCada día te culpo\nDiciendo que yo no hice nada mal\nAsí es como apenas aguanto\nEsa ha sido mi forma de vivir\nSin nada que hacer, camino por la calle\nY de pronto me pega un pensamiento\nTodos los problemas\nLos estaba haciendo yo\n\n[Estribillo]\nEl que cambió fui yo\nEl que cambió fui yo\nEl que cambió fui yo\nTú no tuviste la culpa\n\nEl que cambió fui yo\nEl que cambió fui yo\nEl que cambió fui yo\nYa no hay forma de volver atrás\n\n[Verso 2]\nLo intenté con todas mis fuerzas\nPara deshacer lo que cambió\nPero lo que no funciona\nNo funcionó hasta el final\nAhora qué se supone que haga\nYa no sé nada\nSolo quedan restos pegados en mí\n\n[Estribillo]\nEl que cambió fui yo\nEl que cambió fui yo\nEl que cambió fui yo\nTú no tuviste la culpa\n\nEl que cambió fui yo\nEl que cambió fui yo\nEl que cambió fui yo\nAhora ya es demasiado tarde`,
      ja: `[Verse 1]\n毎日君を責めて\n自分は悪くないって\nそれでどうにか持ちこたえる\nそれが俺の生き方だった\nすることもなく道を歩いて\nふと思うんだ\n問題は全部\n俺が作っていたって\n\n[Chorus]\n変わったのは俺だった\n変わったのは俺だった\n変わったのは俺だった\n君は悪くなかった\n\n変わったのは俺だった\n変わったのは俺だった\n変わったのは俺だった\nもう取り戻せない\n\n[Verse 2]\n変わったものを戻そうと\n必死でやってみたけど\n無理なものは\n最後まで無理だった\nもうどうすればいいのか\n何もわからない\nカスだけがまとわりついて残ってる\n\n[Chorus]\n変わったのは俺だった\n変わったのは俺だった\n変わったのは俺だった\n君は悪くなかった\n\n変わったのは俺だった\n変わったのは俺だった\n変わったのは俺だった\nもう遅すぎる`,
    },
  },
  {
    titles: {
      ko: "레드필",
      en: "Red Pill",
      es: "Píldora Roja",
      ja: "レッドピル",
    },
    lyrics: {
      ko: `당신의\n손에 쥐어진\n빨간 약을 난 삼켜버렸고\n무책임하게\n당신을 꿈에 품었네\n날 탓하지 말아줘요\n\n두려움에\n완전히 젖어버린\n나의 꿈속에 남아줘요\n여전히\n난 변한 게 없는데\n세상은 너무 멀어보이네\n\n이미\n없어졌어\n아직\n살아있는데\n나를\n바라봐\n나를\n좋아하라고\n\n모두 다\n죽어버리라고\n소리를 암만 질러봐도\n어지러운\n목소리들만\n계속 메아리치고 있네\n\n이젠 그 무엇도\n아무 소용이 없네\n내가 먼저\n죽어버려야지\n\n이미\n없어졌어\n아직\n살아있는데\n나를\n바라봐\n나를\n좋아하라고`,
      en: `The one\nHeld in your hand\nI swallowed that red pill\nIrresponsibly\nI held you inside my dream\nPlease don't blame me\n\nSoaked\nCompletely in fear\nStay inside my dream\nStill\nNothing in me has changed\nBut the world feels so far away\n\nAlready\nGone\nStill\nAlive\nLook\nAt me\nSay\nYou like me\n\nEven if I scream\nThat everyone\nShould just die\nOnly dizzy\nVoices\nKeep echoing back\n\nNow nothing\nWorks anymore\nI should\nDie first\n\nAlready\nGone\nStill\nAlive\nLook\nAt me\nSay\nYou like me`,
      es: `La que\nLlevabas en la mano\nEsa píldora roja me la tragué\nSin pensar\nTe guardé dentro de mi sueño\nPor favor no me culpes\n\nEmpapado\nCompletamente de miedo\nQuédate dentro de mi sueño\nTodavía\nYo no he cambiado nada\nPero el mundo se ve demasiado lejos\n\nYa\nDesaparecí\nPero aún\nSigo vivo\nMírame\nA mí\nDime\nQue te gusto\n\nAunque grite\nQue todos\nDeberían morirse\nSolo voces\nMareadas\nSiguen haciendo eco\n\nAhora nada\nSirve de nada\nPrimero\nTendría que morir yo\n\nYa\nDesaparecí\nPero aún\nSigo vivo\nMírame\nA mí\nDime\nQue te gusto`,
      ja: `君の\n手の中にあった\n赤い薬を俺は飲み込んで\n無責任に\n君を夢の中に抱えた\n俺を責めないでほしい\n\n恐怖に\nずぶ濡れになった\n俺の夢の中に残ってほしい\n今でも\n俺は何も変わってないのに\n世界は遠すぎて見える\n\nもう\n消えた\nまだ\n生きてるのに\n俺を\n見て\n俺を\n好きになれよ\n\nみんな\n死んでしまえと\nどれだけ叫んでみても\n眩暈みたいな\n声だけが\nずっと反響してる\n\nもう何も\n意味がない\n俺が先に\n死ぬしかない\n\nもう\n消えた\nまだ\n生きてるのに\n俺を\n見て\n俺を\n好きになれよ`,
    },
  },
];

const langList = ["ko", "en", "es", "ja"];
let currentLang = "ko";

function renderSongs() {
  const list = document.getElementById("songs-list");
  list.innerHTML = "";
  lyricsData.forEach((song, idx) => {
    const title = song.titles[currentLang] || song.titles.ko || "";
    const subtitle = song.titles.en || song.titles.ko || "";
    const lyrics = song.lyrics[currentLang] || song.lyrics.ko || "";

    const block = document.createElement("div");
    block.className = "song-block";
    block.innerHTML = `
      <div class="song-title">
        <span>${title}</span>
        <span class="subtitle">${subtitle}${currentLang !== "en" ? "" : ""}</span>
      </div>
      <div class="lyrics">${lyrics}</div>
    `;
    block.addEventListener("click", (e) => {
      if (
        !e.target.classList.contains("song-title") &&
        !e.target.closest(".song-title")
      )
        return;
      block.classList.toggle("open");
    });
    list.appendChild(block);
  });
}

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  renderSongs();
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
  setLang(currentLang);
});
