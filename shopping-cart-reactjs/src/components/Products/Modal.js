import React, { Component } from 'react';
import './Modal'
class Modal extends Component {
    render() {
        return (

            <div>
                <div class="wrapper">

                </div>
                1
                2
                3
                4
                5
                6
                7
                8
                9
                10
                11
            <div class="wrapper">
                    <input name="modal" type="checkbox" id="modal" />
                    <label for="modal" class="label-show-modal">Click Modal</label>
                    <div class="modal-show">
                        <div class="modal-show-inner">
                            <label for="modal">&#10006;</label>
                            <h2>Show Modal Content</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac laoreet elit. Phasellus dignissim purus vitae urna cursus, quis congue ligula tristique. Ut nec blandit risus. Donec at orci ut justo venenatis viverra. Suspendisse in volutpat lacus. In enim est, dapibus eget ipsum sed, suscipit ultrices diam.</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Modal;