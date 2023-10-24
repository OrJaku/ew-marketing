import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import styles from './Quiz.module.css'
import { AiOutlineClose } from 'react-icons/ai'

import questions from '../../utils/quiz_questions.json'

const modalCustomStyle = {
    content: {
        position: 'absolute',
        width: '90%',
        height: '80%',
        left: '50%',
        overflow: 'auto',
        transform: 'translate(5%, 5%)',
        backgroundColor: 'rgb(253, 253, 253)',
        border: ' 1px solid rgba(195, 195, 195, 0.55)',
        borderRadius: '10px',
        inset: 'unset'
    }
}

const Quiz = ({
    selectedIds,
    setSelectedIds,
    quizIsOpen,
    quizModalOpen,
    setQuizModalOpen
}) => {

    useEffect(() => {
        if (!quizIsOpen) {
            setSelectedIds([])
        }
    }, [quizIsOpen])

    const handleAddToSelected = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(selectedId => selectedId !== id))
        } else {
            setSelectedIds(oldIds => [...oldIds, id])
        }
    }

    return (
        <div>
            <div className={styles.questions}>
                {Object.entries(questions).map(([id_, val]) => (
                    <div
                        key={id_}
                        id={id_}
                        style={{
                            backgroundColor: `rgba(21, 173, 244, ${selectedIds.includes(id_) ? 0.88 : 0.55})`
                        }}
                        onClick={(e) => handleAddToSelected(e.target.id)}>
                        {val.question}
                    </div>
                ))}
            </div>
            <Modal
                style={modalCustomStyle}
                ariaHideApp={false}
                isOpen={quizModalOpen}
                onRequestClose={() => setQuizModalOpen(false)}
            >
                <div style={{ float: 'right' }}>
                    {<AiOutlineClose
                        onClick={() => setQuizModalOpen(false)}
                        size={25}
                        color={'black'} />}

                </div>
                <div className={styles.modal_content}>
                    {selectedIds.map((id_) => (
                        <div key={id_}>{questions[id_].answer}</div>
                    ))}
                </div>
            </Modal>
        </div>
    )
}

export default Quiz