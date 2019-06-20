import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

function ListingPage(props) {
    const id = Number(props.match.params.listId)
    const listing = props.list.filter(listing => listing.id === id)
    console.log(props.list)
    console.log(listing)
    return (
        <div>
            <nav >
                <Link to={`/mylist/${props.userId}`}>My List</Link> <br />
                <Link to='/list'>List</Link>
            </nav>
            <header>
                <h2>{listing[0].title}</h2>
            </header>
            <section>
                <div>
                    <h3>Summary</h3>
                    <p>{listing[0].summary}</p>
                </div>
                <div>
                    <h3>Type</h3>
                    <p>{listing[0].type}</p>
                </div>
                <div>
                    <h3>Address</h3>
                    <p>{listing[0].address}</p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>{listing[0].contact}</p>
                </div>
                <div>
                    <h3>Zip</h3>
                    <p>{listing[0].zip}</p>
                </div>
            </section>

        </div>
    )
}

export default withRouter(ListingPage)