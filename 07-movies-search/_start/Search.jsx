import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
    };

    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        className="validate"
                        placeholder="search"
                        type="search"
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                    />
                </div>
            </div>
        );
    }
}

export { Search };
