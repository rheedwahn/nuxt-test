<template>
    <div class="row clearfix">
        <div class="col-lg-12">
            <div class="card">
                <div class="header">
                    <h2>User List</h2>
                    <ul class="header-dropdown">
                        <li><a href="javascript:void(0);" data-toggle="modal" data-target="#addcontact"><i class="icon-plus"></i></a></li>
                    </ul>
                </div>
                <div class="body table-responsive">
                    <table class="table table-hover m-b-0 c_list">
                        <thead>
                            <tr>
                                <th>
                                    <label class="fancy-checkbox">
                                        <input class="select-all" type="checkbox" name="checkbox">
                                        <span></span>
                                    </label>
                                </th>
                                <th>Name</th>                                    
                                <th>Phone</th>                                    
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                            <tbody>
                            <tr>
                                <td style="width: 50px;">
                                    <label class="fancy-checkbox">
                                        <input class="checkbox-tick" type="checkbox" name="checkbox">
                                        <span></span>
                                    </label>
                                </td>
                                <td>
                                    <img src="/images/xs/avatar1.jpg" class="rounded-circle avatar" alt="">
                                    <p class="c_name">John Smith <span class="badge badge-default m-l-10 hidden-sm-down">Family</span></p>
                                </td>
                                <td>
                                    <span class="phone"><i class="zmdi zmdi-phone m-r-10"></i>264-625-2583</span>
                                </td>                                   
                                <td>
                                    <address><i class="zmdi zmdi-pin"></i>123 6th St. Melbourne, FL 32904</address>
                                </td>
                                <td>                                            
                                    <button type="button" class="btn btn-info" title="Edit"><i class="fa fa-edit"></i></button>
                                    <button type="button" data-type="confirm" class="btn btn-danger js-sweetalert" title="Delete"><i class="fa fa-trash-o"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="fancy-checkbox">
                                        <input class="checkbox-tick" type="checkbox" name="checkbox">
                                        <span></span>
                                    </label>
                                </td>
                                <td>
                                    <img src="/images/xs/avatar3.jpg" class="rounded-circle avatar" alt="">
                                    <p class="c_name">Hossein Shams <span class="badge badge-info m-l-10 hidden-sm-down">Google</span></p>
                                </td>
                                <td>
                                    <span class="phone"><i class="zmdi zmdi-phone m-r-10"></i>264-625-5689</span>
                                </td>                                    
                                <td>
                                    <address><i class="zmdi zmdi-pin"></i>44 Shirley Ave. West Chicago, IL 60185</address>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-info" title="Edit"><i class="fa fa-edit"></i></button>
                                    <button type="button" data-type="confirm" class="btn btn-danger js-sweetalert" title="Delete"><i class="fa fa-trash-o"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="fancy-checkbox">
                                        <input class="checkbox-tick" type="checkbox" name="checkbox">
                                        <span></span>
                                    </label>
                                </td>
                                <td>
                                    <img src="/images/xs/avatar4.jpg" class="rounded-circle avatar" alt="">
                                    <p class="c_name">Maryam Amiri</p>
                                </td>
                                <td>
                                    <span class="phone"><i class="zmdi zmdi-phone m-r-10"></i>264-625-9513</span>
                                </td>
                                <td>
                                    <address><i class="zmdi zmdi-pin"></i>123 6th St. Melbourne, FL 32904</address>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-info" title="Edit"><i class="fa fa-edit"></i></button>
                                    <button type="button" data-type="confirm" class="btn btn-danger js-sweetalert" title="Delete"><i class="fa fa-trash-o"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="fancy-checkbox">
                                        <input class="checkbox-tick" type="checkbox" name="checkbox">
                                        <span></span>
                                    </label>
                                </td>
                                <td>
                                    <img src="/images/xs/avatar6.jpg" class="rounded-circle avatar" alt="">
                                    <p class="c_name">Tim Hank<span class="badge badge-default m-l-10 hidden-sm-down">Family</span></p>
                                </td>
                                <td>
                                    <span class="phone"><i class="zmdi zmdi-phone m-r-10"></i>264-625-1212</span>
                                </td>
                                <td>
                                    <address><i class="zmdi zmdi-pin"></i>70 Bowman St. South Windsor, CT 06074</address>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-info" title="Edit"><i class="fa fa-edit"></i></button>
                                    <button type="button" data-type="confirm" class="btn btn-danger js-sweetalert" title="Delete"><i class="fa fa-trash-o"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="fancy-checkbox">
                                        <input class="checkbox-tick" type="checkbox" name="checkbox">
                                        <span></span>
                                    </label>
                                </td>
                                <td>
                                    <img src="/images/xs/avatar7.jpg" class="rounded-circle avatar" alt="">
                                    <p class="c_name">Fidel Tonn<span class="badge badge-default m-l-10 hidden-sm-down">Family</span></p>
                                </td>
                                <td>
                                    <span class="phone"><i class="zmdi zmdi-phone m-r-10"></i>264-625-2323</span>
                                </td>
                                <td>
                                    <address><i class="zmdi zmdi-pin"></i>514 S. Magnolia St. Orlando, FL 32806</address>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-info" title="Edit"><i class="fa fa-edit"></i></button>
                                    <button type="button" data-type="confirm" class="btn btn-danger js-sweetalert" title="Delete"><i class="fa fa-trash-o"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="fancy-checkbox">
                                        <input class="checkbox-tick" type="checkbox" name="checkbox">
                                        <span></span>
                                    </label>
                                </td>
                                <td>
                                    <img src="/images/xs/avatar8.jpg" class="rounded-circle avatar" alt="">
                                    <p class="c_name">Gary Camara<span class="badge badge-success m-l-10 hidden-sm-down">Work</span></p>
                                </td>
                                <td>
                                    <span class="phone"><i class="zmdi zmdi-phone m-r-10"></i>264-625-1005</span>
                                </td>
                                <td>
                                    <address><i class="zmdi zmdi-pin"></i>44 Shirley Ave. West Chicago, IL 60185</address>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-info" title="Edit"><i class="fa fa-edit"></i></button>
                                    <button type="button" data-type="confirm" class="btn btn-danger js-sweetalert" title="Delete"><i class="fa fa-trash-o"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="fancy-checkbox">
                                        <input class="checkbox-tick" type="checkbox" name="checkbox">
                                        <span></span>
                                    </label>
                                </td>
                                <td>
                                    <img src="/images/xs/avatar9.jpg" class="rounded-circle avatar" alt="">
                                    <p class="c_name">Frank Camly</p>
                                </td>
                                <td>
                                    <span class="phone"><i class="zmdi zmdi-phone m-r-10"></i>264-625-9999</span>
                                </td>
                                <td>
                                    <address><i class="zmdi zmdi-pin"></i>123 6th St. Melbourne, FL 32904</address>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-info" title="Edit"><i class="fa fa-edit"></i></button>
                                    <button type="button" data-type="confirm" class="btn btn-danger js-sweetalert" title="Delete"><i class="fa fa-trash-o"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="fancy-checkbox">
                                        <input class="checkbox-tick" type="checkbox" name="checkbox">
                                        <span></span>
                                    </label>
                                </td>
                                <td>
                                    <img src="/images/xs/avatar10.jpg" class="rounded-circle avatar" alt="">
                                    <p class="c_name">Tim Hank<span class="badge badge-default m-l-10 hidden-sm-down">Family</span></p>
                                </td>
                                <td>
                                    <span class="phone"><i class="zmdi zmdi-phone m-r-10"></i>264-625-1212</span>
                                </td>
                                <td>
                                    <address><i class="zmdi zmdi-pin"></i>70 Bowman St. South Windsor, CT 06074</address>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-info" title="Edit"><i class="fa fa-edit"></i></button>
                                    <button type="button" data-type="confirm" class="btn btn-danger js-sweetalert" title="Delete"><i class="fa fa-trash-o"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>