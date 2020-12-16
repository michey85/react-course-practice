import React from 'react';

class SubscriptionForm extends React.Component {
    state = {
        email: '',
        isAgreeWithTerms: false,
    };

    render() {
        const { email, isAgreeWithTerms } = this.state;

        return (
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isAgreeWithTerms"
                        checked={isAgreeWithTerms}
                    />
                    I agree with terms and conditions
                </label>
                <br />
                <button>Send</button>
            </div>
        );
    }
}

export { SubscriptionForm };
