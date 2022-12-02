import React, { useState } from 'react'


const AskQuestionForm = () => {
    return (
        <section className="faq-contact-area pb-100">
            <div className="container">
                <div className="ask-question">
                    <div className="section-title">
                        <h2>Ask Questions</h2>
                    </div> 
                    <form>
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="Name" 
                                        className="form-control" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="email" 
                                        placeholder="Email" 
                                        className="form-control" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="number" 
                                        placeholder="Phone number" 
                                        className="form-control" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        placeholder="Subject" 
                                        className="form-control" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea 
                                        name="text" 
                                        cols="30" 
                                        rows="6" 
                                        placeholder="Write your message..." 
                                        className="form-control" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-12">
                                <button type="submit" className="default-btn btn-two">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AskQuestionForm;