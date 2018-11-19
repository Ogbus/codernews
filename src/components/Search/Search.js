import React, { Component } from 'react';

const Search = ({ value, onChange, onSubmit, children }) =>
    <form onSubmit = {onSubmit}>
        {children} <input 
            type = 'text' 
            value = {value} 
            onChange = {onChange} 
        />
        <button type = 'submit'>
            {children}
        </button>
    </form>


export default Search;


// class Search extends Component {
//     render() {
//         const { value, onChange, children } = this.props;
//         return (
//             <form>
//                 {children} <input 
//                     type = 'text' 
//                     value = {value} 
//                     onChange = {onChange} 
//                 />
//             </form>
//         )
//     }
// }

// export default Search;