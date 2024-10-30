import React, { Component } from 'react';

class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            ingredients: '',
            instructions: '',
            errorMessage: '',
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { title, ingredients, instructions } = this.state;

        // Basic validation
        if (!title || !ingredients || !instructions) {
            this.setState({ errorMessage: 'Please fill in all fields.' });
            return;
        }

        // Submit the form (e.g., send data to an API)
        // Replace the console.log with your actual submit logic
        console.log('Recipe Submitted:', {
            title,
            ingredients,
            instructions,
        });

        // Reset the form
        this.setState({ title: '', ingredients: '', instructions: '', errorMessage: '' });
    };

    render() {
        const { title, ingredients, instructions, errorMessage } = this.state;

        return (
            <div>
                <h1>Submit a New Recipe</h1>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Title:
                            <input
                                type="text"
                                name="title"
                                value={title}
                                onChange={this.handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Ingredients:
                            <textarea
                                name="ingredients"
                                value={ingredients}
                                onChange={this.handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Instructions:
                            <textarea
                                name="instructions"
                                value={instructions}
                                onChange={this.handleChange}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit">Submit Recipe</button>
                </form>
            </div>
        );
    }
}

export default Submit;
