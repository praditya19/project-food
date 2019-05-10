const restorant = [
  {
    id: "1",
    nama: "MC Donalds ",
    lokasi:
      "Jl. Prof. Dr. Hamka No.105, Ngaliyan, Kota Semarang, Jawa Tengah 50181",
    gambar:
      "https://s3-ap-southeast-1.amazonaws.com/images.humanresourcesonline.net/wp-content/uploads/2016/10/Jerene-Oct-2016-McDonalds-123RF-700x420.jpg",
    food: [
      {
        id: "1",
        nama: "Ayam Paket 1",
        harga: 15000,
        gambar:
          "https://i0.wp.com/harga.web.id/wp-content/uploads/Ayam-Spicy.jpg"
      },
      {
        id: "2",
        nama: "Ayam Paket 2",
        harga: 20000,
        gambar:
          "https://www.minimeinsights.com/wp-content/uploads/2017/04/Ayam-Goreng-McD-Spicy-or-Regular-640x320.jpg"
      },
      {
        id: "3",
        nama: "Ayam Paket 3",
        harga: 25000,
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpc2dEDRLBTIiPHWQx6SYPu72CjSf7-a89SECixQVUH_LI9vX"
      },
      {
        id: "4",
        nama: "Ayam Paket 4",
        harga: 30000,
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnpfTlodr0zlqSrj7DXXqAiPj3u3MOEh9_ulY55pZrDN4pl8R"
      }
    ]
  },

  {
    id: "2",
    nama: "Rocket Chicken",
    lokasi:
      "Jl. Wolter Monginsidi No.88, Genuk, Kota Semarang, Jawa Tengah 50117",
    gambar: "https://s.kaskus.id/images/2013/02/05/2449714_20130205021756.jpg",
    food: [
      {
        id: "1",
        nama: "Paket Ultah KFC 1",
        harga: 30000,
        gambar:
          "https://harga.web.id/wp-content/uploads/Kentucky-Fried-Chicken..jpg"
      },
      {
        id: "2",
        nama: "Paket Ultah KFC 2",
        harga: 20000,
        gambar:
          "http://infohargamenu.com/wp-content/uploads/2018/02/Menu-Mini-Chizza.jpg"
      },
      {
        id: "3",
        nama: "Paket KFC 1",
        harga: 7000,
        gambar:
          "https://hargamenu.net/wp-content/uploads/2018/04/menu-baru-kfc-2018.jpg"
      },
      {
        id: "4",
        nama: "Paket KFC 2",
        harga: 7000,
        gambar:
          "https://2.bp.blogspot.com/-nTvBnN78JN4/V_JY7x3gWfI/AAAAAAAACAc/sD_sRPLLl5EEuFo4MKcrpNoRZFzUIVzcwCLcB/s1600/harga%2Bmenu%2Bkfc%2Bdan%2Bgambarnya%2B4.jpg"
      }
    ]
  },
  {
    id: "3",
    nama: "Burger KIng",
    lokasi:
      "Jl. Pemuda No.108, Sekayu, Semarang, Kota Semarang, Jawa Tengah 50132",
    gambar:
      "http://www.restaurantnews.com/wp-content/uploads/2016/01/Cambridge-Franchise-Holdings-Acquires-42-Burger-King-Restaurants.jpg",
    food: [
      {
        id: "1",
        nama: "Whopper ",
        harga: 40000,
        gambar:
          "data:image/jpeg;base64,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"
      },
      {
        id: "2",
        nama: "Whopper JR",
        harga: 30000,
        gambar: "https://pbs.twimg.com/media/DwU3l8ZW0AE8JJ6.jpg"
      },
      {
        id: "3",
        nama: "Meatless",
        harga: 48000,
        gambar:
          "https://www.washingtonpost.com/resizer/ak7iBfrjTSEc8ubxJtH2ezNz0Zg=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/L65DRW6OLE65ZKQ3EEIC3DIJLI.jpg"
      },
      {
        id: "3",
        nama: " cheese",
        harga: 48000,
        gambar:
          "https://www.philly.com/resizer/69VrOMLzfr6n1dwYv3_nchuaIag=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/NHNH2EHT35GN3EJSHZSAABZWAE.jpg"
      }
    ]
  }
];

export default restorant;
