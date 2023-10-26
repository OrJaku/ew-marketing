import React, { useEffect } from 'react'
import Modal from 'react-modal';
import styles from './Quiz.module.css'
import { AiOutlineClose } from 'react-icons/ai'

import questions from '../../utils/quiz_questions.json'

const modalCustomStyle = {
    content: {
        position: 'absolute',
        width: '50%',
        height: '80%',
        left: '50%',
        overflow: 'auto',
        transform: 'translate(45%, 5%)',
        backgroundColor: 'rgb(253, 253, 253)',
        border: ' 1px solid rgba(195, 195, 195, 0.55)',
        borderRadius: '10px',
        inset: 'unset'
    }
}

const Quiz = ({
    isMobile,
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

    const handleModalCustomStyle = (isMobile, modalCustomStyle) => {
        if (isMobile) {
            modalCustomStyle.content.width = '90%'
            modalCustomStyle.content.transform = 'translate(5%, 5%)'
        }
        return modalCustomStyle
    }

    const renderHTML = (rawHTML) =>
        React.createElement(
            "div",
            {
                dangerouslySetInnerHTML: { __html: rawHTML }
            });
    return (
        <div>
            <div className={styles.questions}>
                {Object.entries(questions).map(([id_, val]) => (
                    <div
                        key={id_}
                        id={id_}
                        style={{
                            backgroundColor: `rgba(70,193,233, ${selectedIds.includes(id_) ? 0.7 : 1})`
                        }}
                        onClick={(e) => handleAddToSelected(e.target.id)}>
                        {val.question}
                    </div>
                ))}
            </div>
            <Modal
                closeTimeoutMS={500}
                style={handleModalCustomStyle(isMobile, modalCustomStyle)}
                ariaHideApp={false}
                isOpen={quizModalOpen}
                onRequestClose={() => setQuizModalOpen(false)}
            >
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {<AiOutlineClose
                        onClick={() => setQuizModalOpen(false)}
                        size={25}
                        cursor={'pointer'}
                        color={'black'} />}

                </div>
                <div
                    className={styles.modal_content}>
                    {selectedIds.map((id_) => (
                        <div key={id_}>
                            <div className={styles.modal_question}>
                                {questions[id_].question}
                            </div>
                            <div className={styles.modal_answers}>
                                {renderHTML(questions[id_].answer)}
                            </div>
                        </div>
                    ))}
                </div>
            </Modal>
        </div>
    )
}

export default Quiz