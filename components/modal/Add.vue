<template>
    <div class="modal fade" id="addcontact" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="title" id="defaultModalLabel">Add Contact</h6>
                </div>
                <div class="modal-body">
                    <div class="row clearfix">
                        <div class="col-6">
                            <div class="form-group">                                    
                                <input type="text" class="form-control" placeholder="First Name">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">                                   
                                <input type="text" class="form-control" placeholder="Last Name">
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">                                    
                                <input type="number" class="form-control" placeholder="Phone Number">
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">                                    
                                <input type="text" class="form-control" placeholder="Enter Address">
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">                                            
                                <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
                                <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                            </div>
                            <hr>
                        </div>
                        <div class="col-6">
                            <div class="form-group">                                    
                                <input type="text" class="form-control" placeholder="Facebook">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">                                   
                                <input type="text" class="form-control" placeholder="Twitter">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">                                    
                                <input type="text" class="form-control" placeholder="Linkedin">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">                                    
                                <input type="text" class="form-control" placeholder="instagram">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Add</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">CLOSE</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>