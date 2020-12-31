import React, { useState } from 'react'
// Types
import { Category, Difficulty } from '../API';
// Styles
import { Wrapper } from './Option.styles';

type OptionProps = {
    category: Category;
    difficulty: Difficulty;
    callback: any;
};

const Option: React.FC<OptionProps> = ({ category, difficulty, callback }) => {

    const [option, setOption] = useState({ category: category, difficulty: difficulty });

    const getCategoryFromValue = (value: string) => Object.entries(Category).filter((item) => item[1] === value)[0][0];

    const getDifficultyFromValue = (value: string) => Object.entries(Difficulty).filter((item) => item[1] === value)[0][0];

    const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        let categoryKey = getCategoryFromValue(e.target.value) as keyof typeof Category;
        let selectedCategory = Category[categoryKey];
        //console.log("selectedCategory=" + selectedCategory.toString());
        setOption({ ...option, category: selectedCategory });
        callback({ ...option, category: selectedCategory });
    }
    const changeDifficulty = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        let difficultyKey = getDifficultyFromValue(e.target.value) as keyof typeof Difficulty;
        let selectedDifficulty = Difficulty[difficultyKey];
        //console.log("selectedDifficulty=" + selectedDifficulty.toString());
        setOption({ ...option, difficulty: selectedDifficulty });
        callback({ ...option, difficulty: selectedDifficulty });
    }

    return (
        <Wrapper>
        <form>
            <p className="number">
                Category :
            <select onChange={changeCategory} value={category}>

                    <option value={Category.Any}>Any</option>
                    <option value={Category.GeneralKnowledge}>General Knowledge</option>
                    <option value={Category.Books}>Books</option>
                    <option value={Category.Film}>Film</option>
                    <option value={Category.Music}>Music</option>
                    <option value={Category.MusicalsAndTheatres}>Musicals And Theatres</option>
                    <option value={Category.Television}>Television</option>
                    <option value={Category.VideoGames}>Video Games</option>
                    <option value={Category.BoardGames}>Board Games</option>
                    <option value={Category.Nature}>Nature</option>
                    <option value={Category.Computers}>Computers</option>
                    <option value={Category.Mathematics}>Mathematics</option>
                    <option value={Category.Mythology}>Mythology</option>
                    <option value={Category.Sports}>Sports</option>
                    <option value={Category.Geography}>Geography</option>
                    <option value={Category.History}>History</option>
                    <option value={Category.Politics}>Politics</option>
                    <option value={Category.Art}>Art</option>
                    <option value={Category.Celebrities}>Celebrities</option>
                    <option value={Category.Animals}>Animals</option>
                    <option value={Category.Vehicles}>Vehicles</option>
                    <option value={Category.Comics}>Comics</option>
                    <option value={Category.Gadgets}>Gadgets</option>
                    <option value={Category.JapaneseAnimeAndManga}>Japanese Anime And Manga</option>
                    <option value={Category.CartoonAndAnimations}>Cartoon And Animations</option>

                </select>
            </p>
            <p className="number">
                Difficulty :
            <select onChange={(event) => changeDifficulty(event)} value={difficulty}>
                    <option value={Difficulty.EASY}>Easy</option>
                    <option value={Difficulty.MEDIUM}>Medium</option>
                    <option value={Difficulty.HARD}>Hard</option>
                </select>
            </p>
        </form>
        </Wrapper>
    )
};

export default Option;
