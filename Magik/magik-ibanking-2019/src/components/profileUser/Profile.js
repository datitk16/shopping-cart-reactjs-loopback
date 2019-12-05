import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <section id="main-content">
                <section class="wrapper">
                    <h3><i class="fa fa-angle-right"></i> Advanced Form Components</h3>
                
                  
                  
                    <div class="row mt">
                        <div class="col-lg-12">
                            <div class="form-panel">
                                <form action="#" class="form-horizontal style-form">
                                    <div class="form-group">
                                        <label class="control-label col-md-3">Default</label>
                                        <div class="col-md-4">
                                            <input type="file" class="default" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-md-3">Without input</label>
                                        <div class="controls col-md-9">
                                            <div class="fileupload fileupload-new" data-provides="fileupload">
                                                <span class="btn btn-theme02 btn-file">
                                                    <span class="fileupload-new"><i class="fa fa-paperclip"></i> Select file</span>
                                                    <span class="fileupload-exists"><i class="fa fa-undo"></i> Change</span>
                                                    <input type="file" class="default" />
                                                </span>
                                                <span class="fileupload-preview zero__fileup" ></span>
                                                <a href="advanced_form_components.html#" class="close fileupload-exists two__fileup" data-dismiss="fileupload" ></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group last">
                                        <label class="control-label col-md-3">Image Upload</label>
                                        <div class="col-md-9">
                                            <div class="fileupload fileupload-new" data-provides="fileupload">
                                                <div class="fileupload-new thumbnail style__thumbnail">
                                                    <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&text=no+image" alt="" />
                                                </div>
                                                <div class="fileupload-preview fileupload-exists thumbnail three__fileup"></div>
                                                <div>
                                                    <span class="btn btn-theme02 btn-file">
                                                        <span class="fileupload-new"><i class="fa fa-paperclip"></i> Select image</span>
                                                        <span class="fileupload-exists"><i class="fa fa-undo"></i> Change</span>
                                                        <input type="file" class="default" />
                                                    </span>
                                                    <a href="advanced_form_components.html#" class="btn btn-theme04 fileupload-exists" data-dismiss="fileupload"><i class="fa fa-trash-o"></i> Remove</a>
                                                </div>
                                            </div>
                                            <span class="label label-info">NOTE!</span>
                                            <span>
                                                Attached image thumbnail is
                                                supported in Latest Firefox, Chrome, Opera,
                                                Safari and Internet Explorer 10 only
                          </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default Profile;