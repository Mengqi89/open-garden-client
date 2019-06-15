import React from 'react';

function AddListing(props) {
    function handleSubmit(event) {
        event.preventDefault()
        const { listing_title, listing_summary, listing_type, contact, address } = event.target
        window.localStorage.setItem('listing_title', listing_title.value)
        window.localStorage.setItem('listing_summary', listing_summary.value)
        window.localStorage.setItem('listing_type', listing_type.value)
        window.localStorage.setItem('contact', contact.value)
        window.localStorage.setItem('address', address.value)
    }

    return (
        <div>
            <header>
                <h1>Fresh Share!</h1>
            </header>
            <section>
                <form id='add-listing' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='listing-title'>Title: </label><br />
                        <input id='listing-title' name='listing_title' type='text' placeholder='five tomatoes' required />

                    </div>
                    <div>
                        <label htmlFor='listing-summary'>Summary: </label><br />
                        <textarea id='listing-summary' name='listing_summary' rows='10' />
                    </div>
                    <div>
                        <p>Select listing type</p>
                        <input type='radio' id='vegetable' name='listing_type'></input>
                        <label htmlFor='vegetable'>vegetable</label>

                        <input type='radio' id='fruit' name='listing_type'></input>
                        <label htmlFor='fruit'>fruit</label>
                    </div>
                    <div>
                        <label htmlFor='contact'>Email/Cell</label>
                        <input id='contact' name='contact' type='text' required></input>
                    </div>
                    <div>
                        <label htmlFor='address'>Address</label>
                        <input id='address' name='address' type='text' required></input>
                    </div>

                    <button type='submit'>Share!</button>
                </form>
            </section>
        </div>
    );
};

export default AddListing;