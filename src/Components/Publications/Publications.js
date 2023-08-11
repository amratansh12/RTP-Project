import Content from "./Content/Content";
import "./Publications.css"

const Publications = () => {
    return (
        <div className="publication">

            <div className="heading-box">
                <p className="heading-text">PUBLICATIONS</p>
                <hr className="heading-line" />
                <p className="heading-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                </p>
            </div>

            <div className="content-box">
                <p className="content-heading"><span>Our Publications</span></p>
                <Content />
                <Content />
                <Content />
                <Content />
                <Content />
                <Content />
                <Content />
                <Content />
            </div>

        </div>
    )
}


export default Publications;