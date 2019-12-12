import React, { Component } from 'react';
import './AdminUtilities.css'
class AdminUtilities extends Component {
    render() {
        return (

            <section id="main-content">
                <section class="wrapper site-min-height">
                    <h3><i class="fa fa-angle-right"></i> Multiple Files Uploader</h3>
                    <div class="row mt">
                        <div class="col-lg-12">
                            <form id="fileupload" action="http://jquery-file-upload.appspot.com/" method="POST" enctype="multipart/form-data">
                                <noscript>
                                    <input type="hidden" name="redirect" value="http://blueimp.github.io/jQuery-File-Upload/" />
                                </noscript>
                                <div class="row fileupload-buttonbar">
                                    <div class="col-lg-8">
                                        <span class="btn btn-success fileinput-button">
                                            <i class="glyphicon glyphicon-plus"></i>
                                            <span>Add files...</span>
                                            <input type="file" name="files[]" multiple />
                                        </span>
                                        <button type="submit" class="btn btn-theme start">
                                            <i class="glyphicon glyphicon-upload"></i>
                                            <span>Start upload</span>
                                        </button>
                                        <button type="reset" class="btn btn-theme02 cancel">
                                            <i class="glyphicon glyphicon-ban-circle"></i>
                                            <span>Cancel upload</span>
                                        </button>
                                        <button type="button" class="btn btn-theme04 delete">
                                            <i class="glyphicon glyphicon-trash"></i>
                                            <span>Delete</span>
                                        </button>
                                        <input type="checkbox" class="toggle" />
                                        <span class="fileupload-process"></span>
                                    </div>
                                    <div class="col-lg-4 fileupload-progress fade">
                                        <div class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar progress-bar-success" >
                                            </div>
                                        </div>
                                        <div class="progress-extended">
                                            &nbsp;
                  </div>
                                    </div>
                                </div>
                                <table role="presentation" class="table table-striped">
                                    <tbody class="files">
                                    </tbody>
                                </table>
                            </form>

                            <div class="content-panel">
                                <div class="panel-body">
                                    <h4>Demo Notes</h4>
                                    <ul>
                                        <li>The maximum file size for uploads in this demo is <strong>5 MB</strong> (default file size is unlimited).</li>
                                        <li>Only image files (<strong>JPG, GIF, PNG</strong>) are allowed in this demo (by default there is no file type restriction).</li>
                                        <li>Uploaded files will be deleted automatically after <strong>5 minutes</strong> (demo setting).</li>
                                        <li>You can <strong>drag &amp; drop</strong> files from your desktop on this webpage (see <a href="https://github.com/blueimp/jQuery-File-Upload/wiki/Browser-support">Browser support</a>).</li>
                                        <li>Please refer to the <a href="https://github.com/blueimp/jQuery-File-Upload">project website</a> and <a href="https://github.com/blueimp/jQuery-File-Upload/wiki">documentation</a> for more information.</li>
                                        <li>Built with Twitter's <a href="http://twitter.github.com/bootstrap/">Bootstrap</a> CSS framework and Icons from <a href="http://glyphicons.com/">Glyphicons</a>.</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="blueimp-gallery" class="blueimp-gallery blueimp-gallery-controls" data-filter=":even">
                                <div class="slides"></div>
                                <h3 class="title"></h3>
                                <a class="prev">‹</a>
                                <a class="next">›</a>
                                <a class="close">×</a>
                                <a class="play-pause"></a>
                                <ol class="indicator"></ol>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default AdminUtilities;