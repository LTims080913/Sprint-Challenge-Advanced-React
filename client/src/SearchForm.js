import React from 'react';
import { useForm } from './hooks/useForm';
import { useDarkMode } from './hooks/useDarkMode';
import { useFairyMode } from './hooks/useFairyMode';



export function SearchForm (props) {

    const [darkMode, setDarkMode] = useDarkMode("isDark");
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    const [fairyMode, setFairyMode] = useFairyMode("isFairy");
    const toggleFairy = e => {
        e.preventDefault();
        setFairyMode(!fairyMode);
    }

    const [form, handleChange] = useForm();
    const handleSubmit = e => {
        e.preventDefault();
        props.handleSearch(form.search);
    };
 
    return (
        
        <form onSubmit = {handleSubmit}> 
            <div onClick={toggleMode}>Dark Mode</div>
            
            <div onClick={toggleFairy}>Fairy Mode</div>
           
            <input
                name="search"
                placeholder="Search"
                onChange={handleChange}
                value={form.search}
            />
            <button type="submit">Submit</button>
        </form>
    );
}