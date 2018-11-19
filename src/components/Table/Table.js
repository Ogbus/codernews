import React, { Component } from 'react';

function isSearched (searchTerm) {
    return function(item) {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
}

const Table = ({ list, pattern, onDismiss }) =>
    <div className = 'table'>
        {list.filter(isSearched(pattern)).map(item => 
        <div key = {item.objectID} className = 'table-row'>
            <span style = {{ width: '40%' }}>
                <a href = {item.url}>{item.title}</a>
            </span>
            <span style = {{ width: '30%' }}>
                {item.author}
            </span>
            <span style = {{ width: '10%' }}>
                {item.num_comments}
            </span>
            <span style = {{ width: '10%' }}>
                {item.points}
            </span>
            <span style = {{ width: '10%' }}> 
                <button 
                    onClick = {() => onDismiss(item.objectID)}
                    className = 'button-inline' 
                >
                    Dismiss
                </button>
            </span>
        </div>
        )}
    </div>

export default Table;


// class Table extends Component {
//     render() {
//         const { list, pattern, onDismiss } = this.props;
//         return (
//         <div>
//             {list.filter(isSearched(pattern)).map(item => 
//             <div key = {item.objectID}>
//                 <span>
//                 <a href = {item.url}>{item.title}</a>
//                 </span>
//                 <span>{item.author}</span>
//                 <span>{item.num_comments}</span>
//                 <span>{item.points}</span>
//                 <span>
//                     <button 
//                         onClick = {() => onDismiss(item.objectID)} 
//                     >
//                         Dismiss
//                     </button>
//                 </span>
//             </div>
//             )}
//         </div>
//         );
//     }
// }

// export default Table;