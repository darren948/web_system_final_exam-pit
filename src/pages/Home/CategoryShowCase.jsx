import { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../../components/Sidebar/rating";

const title = "Our Products";


const ProductData = [
    {
        imgUrl: 'src/assets/images/categoryTab/01.jpg',
        cate: 'Shoes',
        title: 'Adidas Ultra Boost',
        brand: 'Adidas',
        price: '₱2,000',
        id: 1,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/02.jpg',
        cate: 'Bags',
        title: 'Adidas Power Backpack',
        brand: 'Adidas',
        price: '₱2,200',
        id: 2,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/03.jpg',
        cate: 'Earphones',
        title: 'RPT-01 Bluetooth Sport',
        brand: 'Adidas',
        price: '₱3,000',
        id: 3,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/04.jpg',
        cate: 'Bottle',
        title: 'Metal Water Bottle',
        brand: 'Adidas',
        price: '₱800',
        id: 4,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/05.jpg',
        cate: 'Attire',
        title: 'TreeFoil Shirt',
        brand: 'Adidas',
        price: '₱2,100',
        id: 5,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/06.jpg',
        cate: 'Attire',
        title: 'Tiro 21 Track Pants',
        brand: 'Adidas',
        price: '₱1,800',
        id: 6,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/07.jpg',
        cate: 'Bags',
        title: 'RYV Toploader Backpack ',
        brand: 'Adidas',
        price: '₱5,000',
        id: 7,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/08.jpg',
        cate: 'Cap',
        title: 'Dispatch Trucker Hat',
        brand: 'Adidas',
        price: '₱600',
        id: 8,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/09.jpg',
        cate: 'Shoes',
        title: 'Supernova Shoes',
        brand: 'Adidas',
        price: '₱2,100',
        id: 9,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/10.jpg',
        cate: 'Bottle',
        title: 'Metal Water Bottle',
        brand: 'Adidas',
        price: '₱800',
        id: 10,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/11.jpg',
        cate: 'Cap',
        title: 'Washed Bucket',
        brand: 'Adidas',
        price: '₱600',
        id: 11,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/12.jpg',
        cate: 'Earphones',
        title: 'Z.N.E 01 ANC',
        brand: 'Adidas',
        price: '₱1,500',
        id: 12,
    },
]


const CategoryShowCase = () => {
    const [items, setItems] = useState(ProductData);
    const filterItem = (categItem) => {
        const updateItems = ProductData.filter((curElem) => {
            return curElem.cate === categItem;
        });
        setItems(updateItems);
    }
  return (
    <div className="course-section style-3 padding-tb">
    <div className="course-shape one"><img src="/src/assets/images/shape-img/icon/01.png" alt="education" /></div>
    <div className="course-shape two"><img src="/src/assets/images/shape-img/icon/02.png" alt="education" /></div>
    <div className="container">

        {/* section header */}
        <div className="section-header">
            <h2 className="title">{title}</h2>
            <div className="course-filter-group">
                <ul className="lab-ul">
                    <li onClick={() => setItems(ProductData) }>All</li>
                    <li onClick={() => filterItem('Shoes') }>Shoes</li>
                    <li onClick={() => filterItem('Bags') }>Bags</li>
                    <li onClick={() => filterItem('Attire') }>Attire</li>
                    <li onClick={() => filterItem('Earphones') }>Earphones</li>
                    <li onClick={() => filterItem('Bottle') }>Bottles</li>
                    <li onClick={() => filterItem('Cap') }>Cap</li>
                </ul>
            </div>
        </div>

        {/* section body */}
        <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
                { items.map((elem) => {
                    const { id, imgUrl, imgAlt, cate, title, brand, authorName, price } = elem;
                    return (
                        <div className="col" key={id}>
                            <div className="course-item style-4">
                                <div className="course-inner">
                                    <div className="course-thumb">
                                        <img src={imgUrl} alt="" />
                                        <div className="course-category">
                                            <div className="course-cate">
                                                <a href="#">{cate}</a>
                                            </div>
                                            <div className="course-reiew">
                                                <Rating />
                                            </div>
                                        </div>
                                    </div>

                                    {/* content  */}
                                    <div className="course-content">
                                        <p><h5>{title}</h5></p>
                                        <div className="course-footer">
                                            <div className="course-author">
                                                <p className="ca-name">{brand}</p>
                                            </div>
                                            <div className="course-price">{price}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) })
                }
            </div>
        </div>
    </div>
</div>
  )
}

export default CategoryShowCase