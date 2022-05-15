import React from 'react'
import { Link } from 'react-router-dom'
import '..//assets//styles//Breadcrumb.css'

const Breadcrumb = (props) => {
    const { pageName } = props;
    return (
        <div className="container">
            <nav style={{ '--bs-breadcrumb-divider': 'url(&#34;data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="8" height="8"%3E%3Cpath d="M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z" fill="currentColor"/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb"' }}>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{pageName}</li>
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumb