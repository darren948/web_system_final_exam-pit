
const title = "Our Popular Tags";


const tagsList = [
    {
        link: '#',
        text: 'bottle',
    },
    {
        link: '#',
        text: 'mens pants',
    },
    {
        link: '#',
        text: 'mens boots',
    },
    {
        link: '#',
        text: 'bag',
    },
    {
        link: '#',
        text: 'cap',
    },
    {
        link: '#',
        text: 'sneakers',
    },
    {
        link: '#',
        text: 'shirt',
    },
    {
        link: '#',
        text: 'earphones',
    },
]

const Tags = () => {
    return (
        <div className="widget widget-tags">
            <div className="widget-header">
                <h5 className="title">{title}</h5>
            </div>
            <ul className="widget-wrapper">
                {tagsList.map((val, i) => (
                    <li key={i}><a href={val.link}>{val.text}</a></li>
                ))}
            </ul>
        </div>
    );
}

export default Tags;