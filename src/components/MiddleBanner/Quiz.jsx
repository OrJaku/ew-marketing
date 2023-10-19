import React, { useState } from 'react'
import styles from './Quiz.module.css'

import questions from '../../utils/quiz_questions.json'

const Quiz = () => {

    const [selectedIds, setSelectedIds] = useState([])

    const handleAddToSelected = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(selectedId => selectedId !== id))
        } else {
            setSelectedIds(oldIds => [...oldIds, id])
        }
    }

    return (
        <div className={styles.questions}>
            {Object.entries(questions).map(([id_, val]) => (
                <div
                    key={id_}
                    id={id_}
                    style={{
                        backgroundColor: `rgba(21, 173, 244, ${selectedIds.includes(id_) ? 0.88 : 0.48})`
                    }}
                    onClick={(e) => handleAddToSelected(e.target.id)}>
                    {val.question}
                </div>
            ))}
        </div>
    )
}

export default Quiz