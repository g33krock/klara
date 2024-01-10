import React, { useState } from "react";
import Modal from "react-modal";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Videos({ auth }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");

    const openModal = (url) => {
        setVideoUrl(url);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div>
                <div className="video-header">
                    <h1>Videos that help you</h1>
                </div>
                <div className="button-container">
                    <button
                        className="gr-button"
                        onClick={() =>
                            openModal(
                                "https://www.youtube.com/embed/Qe9QgDNAtfQ?autoplay=1"
                            )
                        }
                    >
                        Reflection on Global Responsibility
                    </button>
                    <button
                        className="sw-button"
                        onClick={() =>
                            openModal(
                                "https://www.youtube.com/embed/kT8cX2-_7pQ?autoplay=1"
                            )
                        }
                    >
                        Introspection on Self Worth
                    </button>
                    <button
                        className="ob-button"
                        onClick={() =>
                            openModal(
                                "https://www.youtube.com/embed/5PcjdJz61VI?autoplay=1"
                            )
                        }
                    >
                        Overcoming Obstacles
                    </button>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className="your-modal-class"
                >
                    <button className="close-modal-button" onClick={closeModal}>
                        Close
                    </button>
                    <iframe
                        className="video-iframe"
                        src={videoUrl}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </Modal>
            </div>
        </AuthenticatedLayout>
    );
}
