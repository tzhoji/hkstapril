import './categoy-item.styles.scss'


const CategoryItem = ({ category }) => {
    const { imagefile, title } = category;
    return (
        <div className="category-container">
            <div
                className="background-image"
                style={{
                backgroundImage: `url(${imagefile})`,
                }}
            />
            <div className="category-body-container">
                <h2>{title}</h2>
                <h3>Shop Now</h3>
            </div>
        </div>
    )
}

export default CategoryItem