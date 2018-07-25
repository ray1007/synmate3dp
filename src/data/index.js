export const styles = theme => ({
  content: {
    padding: '20px 40px',
  },
  jumbo: {
    padding: '0px 10%',
    textAlign: 'center',
    marginTop: theme.spacing.unit * 3,
  },
  paper: {
    padding: '20px',
  },
  divider: {
    margin: '20px 0px'
  },
  divTitle: {
    textAlign: 'center',
    padding: '0px 20px',
  },
  underline: {
    'text-decoration': 'underline'
  }
});

export const productData = [
  {
    'category_name': '兵器架系列',
    'path': '/product/weaponShelf',
    'category_img': '/images/weapon_shelf.jpg',
    'description': '輕盈強韌的材質，搭配東方風格的花紋雕刻，以兼顧實用與美觀的設計襯托您的兵器。',
    'product_names': [
      '單層刀架(壁貼)',
      '單層刀架(螺絲)',
    ],
    'ready': true,
  },
  {
    'category_name': '棋盤遊戲系列',
    'path': '/product/boardGame',
    'category_img': '/images/board_games2.jpg',
    'description': '以低多邊形風格(Low Poly)復刻經典棋盤遊戲。',
    'product_names': [
      'Fox & Sheep'
    ],
    'ready': true,
  },
  {
    'category_name': 'iphone保護套系列',
    'path': '/product/iphoneCase',
    'category_img': '/images/iphone_case.jpg',
    'description': '用具彈性的尼龍材質製作的保護套，保護並裝飾您的手機。',
    'product_names': [

    ],
    'ready': true,
  },
]

export const introductionData = [
  {
    'title': '',
    'description': '輕盈強韌的PLA材質，搭配東方風格的花紋雕刻，以兼顧實用與美觀的設計襯托您的兵器。',
  },
  {
    'category_name': '棋盤遊戲系列',
    'description': '以低多邊形風格(Low Poly)復刻經典棋盤遊戲。附抽屜的棋盤設計將遊戲與收納合為一體。',
  },
  {
    'category_name': 'iphone保護套系列',
    'description': '開發中',
  },
]

/* 兵器架系列 */
export const textureGalleryData = [
  {
    'caption': '紅銅(左)、鈦金(右)',
    'imgPath': '/images/weapon_shelf/texture_n_color.jpg',
  },
  {
    'caption': '紅銅',
    'imgPath': '/images/weapon_shelf/texture_n_color2.jpg',
  },
]
export const weaponShelfGalleryData = [
  {
    'caption': '單刀',
    'imgPath': '/images/weapon_shelf/bisonTailBlade_blade_n_scabbard.jpg',
  },
  {
    'caption': '單刀/鐵尺',
    'imgPath': '/images/weapon_shelf/bisonTailBlade_Sai.jpg',
  },
  {
    'caption': '木劍/單刀/鐵尺',
    'imgPath': '/images/weapon_shelf/woodSword_bisonTailBlade_Sai.jpg',
  },
  {
    'caption': '山刀 (王昱傑 攝)',
    'imgPath': '/images/weapon_shelf/mountBlade.jpg',
  },
  {
    'caption': '山刀 (王昱傑 攝)',
    'imgPath': '/images/weapon_shelf/mountBlade_side.jpg',
  },
]

/* 棋盤遊戲系列 */
export const boardGameProductList = [
  {
    'title': '狐狸與羊 Fox & Sheep',
    'description': '以小搏大，以寡敵眾！經典兩人棋盤遊戲，玩家分別扮演棋盤上的2隻狐狸與20隻羊。在狐狸的獵捕下，羊群唯有團結才有機會獲勝！',
    'path': '/product/boardGame/foxAndSheep',
    'img': '/images/board_games2.jpg',
    'ready': true,
  },
  {
    'title': '維京棋 Hnefatafl',
    'description': '',
    'path': '/product/boardGame/hnefatafl',
    'img': '/images/default.jpg',
    'ready': false,
  },
]

export const boardGameGalleryData = [
  {
    'caption': '單刀',
    'imgPath': 'images/bisonTailBlade_blade_n_scabbard.jpg',
  },
  {
    'caption': '單刀/鐵尺',
    'imgPath': 'images/bisonTailBlade_Sai.png',
  },
  {
    'caption': '木劍/單刀/鐵尺',
    'imgPath': 'images/woodSword_bisonTailBlade_Sai.png',
  },
  {
    'caption': '山刀 (王昱傑 攝)',
    'imgPath': 'images/mountBlade.png',
  },
  {
    'caption': '山刀 (王昱傑 攝)',
    'imgPath': 'images/mountBlade_side.png',
  },
]

export const foxSheepRuleGalleryData = [
  {
    'caption': '開局：棋盤配置',
    'imgPath': '/images/fox_sheep/rule_fig1.jpg',
  },
  {
    'caption': '進行：移動方式、狐狸跳過(吃掉)羊',
    'imgPath': '/images/fox_sheep/rule_fig2.jpg',
  },
  {
    'caption': '進行：羊圍堵狐狸',
    'imgPath': '/images/fox_sheep/rule_fig3.jpg',
  },
  {
    'caption': '結束：獲勝條件',
    'imgPath': '/images/fox_sheep/rule_fig4.jpg',
  },
]

export const foxSheepGalleryData = [
  {
    'caption': '紙張棋盤',
    'imgPath': '/images/fox_sheep/paper_board.jpg',
  },
  {
    'caption': 'PLA棋盤',
    'imgPath': '/images/fox_sheep/pla_board.jpg',
  },
  {
    'caption': 'PLA棋盤(盤面特寫)',
    'imgPath': '/images/fox_sheep/pla_board_closeup.jpg',
  },
  {
    'caption': 'PLA棋盤(背面)',
    'imgPath': '/images/fox_sheep/pla_board_back.jpg',
  },
  {
    'caption': '樺木棋盤',
    'imgPath': '/images/fox_sheep/wooden_board.jpg',
  },
  {
    'caption': '棋子',
    'imgPath': '/images/fox_sheep/pieces.jpg',
  },
  {
    'caption': '遊戲規則，攝於瑞典赫爾辛堡，Kärnan博物館',
    'imgPath': '/images/fox_sheep/rule_Kärnan.jpg',
  },
  {
    'caption': '棋盤，攝於瑞典赫爾辛堡，Kärnan博物館',
    'imgPath': '/images/fox_sheep/board_Kärnan.jpg',
  },
  {
    'caption': '聚會遊戲',
    'imgPath': '/images/fox_sheep/play1.jpg',
  },
  {
    'caption': '聚會遊戲',
    'imgPath': '/images/fox_sheep/play2.jpg',
  },
]
