import React from 'react';

function AddListing(props) {
    return (
        <div>
            <header>
                <h1>Fresh Share!</h1>
            </header>
            <section>
                <form id='add-listing'>
                    <div>
                        <label htmlFor='listing-title'>Title: </label><br />
                        <input id='listing-title' name='listing-title' type='text' placeholder='five tomatoes' required />

                    </div>

                    <div>
                        <label htmlFor='listing-summary'>Description: </label><br />
                        <textarea id='listing-summary' name='listing-summary' rows='10' />
                    </div>

                    <div>
                        <p>Select listing type</p>
                        <input type='radio' id='vegetable' name='listing-type' checked></input>
                        <label htmlFor='vegetable'>vegetable</label>

                        <input type='radio' id='fruit' name='listing-type'></input>
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