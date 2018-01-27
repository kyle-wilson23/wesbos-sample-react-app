import React from 'react';
import { getFunName } from '../helpers';

/**
 * Component for the StorePicker view
 * This is the default view that loads when the app is launched and allows user to choose a store page
 */
class StorePicker extends React.Component {
    constructor() {
        super();
        
        // Weird react way to ensure goToStore method is bound to StorePicker class
        // We've done this more cleanly within the onSubmit attr of the form element
        // this.goToStore = this.goToStore.bind(this);
    }

    goToStore(event) {
        event.preventDefault();
        console.log("You changed the URL");

        // First grab text from the input box
        console.log(`Going to ${storeId}`);
        const storeId = this.storeInput.value;

        // Then transition from / to /store/:storeId
        this.context.router.transitionTo(`/store/${storeId}`);
    }
    
    render() {
        return (
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
                <h2>Please Enter A Store</h2>
                {/* The ref function on this input is how we put a reference on this input element on this StorePicker class */}
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

// Tells StorePicker that we expect a router prop from the parent (index.js)
StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;