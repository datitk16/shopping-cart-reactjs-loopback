import React, { Component } from 'react';
import './Modal'
class Modal extends Component {
    render() {
        return (

            <div>
                <div class="container">
                    <div class="interior">
                        <a class="btn" href="#open-modal">👋 Basic CSS-Only Modal</a>
                    </div>
                </div>
                <div id="open-modal" class="modal-window">
                    <div>
                        <a href="#" title="Close" class="modal-close">Close</a>
                        <h1>Voilà!</h1>
                        <div>A CSS-only modal based on the :target pseudo-class. Hope you find it helpful.</div>
                        <div><small>Check out</small></div>
                        <a href="https://aminoeditor.com" target="_blank">👉 Amino: Live CSS Editor for Chrome</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;