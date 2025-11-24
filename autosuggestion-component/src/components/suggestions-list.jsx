import React from 'react'

const SuggestionsList = ({
    suggestions = [],
    highlight,    // input highlighted
    datakey,   // which key has to be render inside it. 
    onSuggestionClick,
}) => {

    const getHighlightedText = (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, "gi")); // split things
        return (
            <span>
                {parts.map((part, index) => {
                    return part.toLowerCase() === highlight.toLowerCase() ?
                        (<b key={index}> {part} </b>) : (part) // it bolds the typed text
                })}
            </span>
        );
    }

    return (
        <>
            {suggestions.map((suggestion, index) => {
                const currSuggestion = datakey ? suggestion[datakey] : suggestion;
                return (
                    <li
                        key={index}
                        onClick={() => onSuggestionClick(suggestion)}
                        className='suggestion-item'
                    >
                        {getHighlightedText(currSuggestion, highlight)}
                    </li>
                );
            })}
        </>
    )
}

export default SuggestionsList;

//  React.Fragment  <> </> 
