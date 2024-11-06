import React, { Component } from 'react';
import axios from 'axios';

class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description:'',
            ingredients: '',
            instructions: '',
            // cookingtime:'',
            // Servings:'',
            // Cuisine:'',
            // Calories:'',
            // errorMessage: '',
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { title, description, ingredients, instructions } = this.state;

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

        axios.post('http://localhost:3000/api/recipes', this.state)
        .then(response => {
          alert('Recipe submitted successfully!');
          // Optionnel : Rediriger ou réinitialiser le formulaire
        })
        .catch(error => console.error('Error submitting recipe:', error));

        // Reset the form
        this.setState({ title: '', description:'', ingredients: '', instructions: '', errorMessage: '' });
    };

    render() {
        const { title, description, ingredients, instructions, errorMessage } = this.state;

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
                            description:
                            <textarea
                                name="description"
                                value={description}
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
                    {/* <div>
                        <label>
                            Mode of cooking:
                            <textarea
                                name="cooking time"
                                value={Cooking}
                                onChange={this.handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Serving:
                            <textarea
                                name="serving"
                                value={Cooking}
                                onChange={this.handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Cuisine:
                            <textarea
                                name="cuisine"
                                value={Cooking}
                                onChange={this.handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                        Calories:
                            <textarea
                                name="Calories"
                                value={Cooking}
                                onChange={this.handleChange}
                                required
                            />
                        </label>
                    </div> */}
                   
                    <button type="submit">Submit Recipe</button>
                </form>
            </div>
        );
    }
}

export default Submit;
