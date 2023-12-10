<template>
    <div class="wrapper md-center p-3">
        <div class="container-fluid">
            <div class="row justify-content-md-center">
    <div class="col col-sm-3">
      <!--  -->
    </div>
    <div class="col-lg-4" >
        <div class="card text-center" style="background-color: rgb(164, 33, 13);border-radius: 20px; ">
             
                <div class="card-body"  >
                    <img class="mb-2" src='../../assets/images/ku-bo.png' style="height:80px ;" alt="">
                    <h5 class="card-title" style="color: white; font-size: 30px; font-family: 'Cairo';">RestoCafe'</h5>
                    <form class="p-0">
                        <div class="row">
                        <div class="col" style="padding-right:0px ;">
                            <div class="form-floating mb-1">
                            <input type="firstname" class="form-control" id="floatingInput" placeholder="First Name">
                            <label for="floatingInput">Firstname</label>
                            </div>
                            <div class="form-floating mb-1">
                            <input type="mobile_number" class="form-control" id="floatingInput" placeholder="Mobile Number">
                            <label for="floatingInput">Mobile Number</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                                <label for="floatingPassword">Password</label>
                            </div>
                        </div>

                        <div class="col" >
                            <div class="form-floating mb-1">
                            <input type="lastname" class="form-control" id="floatingInput" placeholder="Last Name">
                            <label for="floatingInput">Lastname</label>
                            </div>
                            <div class="form-floating mb-1">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating mb-1">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Re-type password">
                                <label for="floatingPassword">Confirm Password</label>
                        </div>
                        </div>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="address" class="form-control" id="floatingInput" placeholder="address">
                            <label for="floatingInput">Address</label>
                        </div>
                            <router-link to="/login" exact-path  style="text-decoration: none; color:white; float:inline-end; font-size: 14px;">Already have an account?</router-link>
                            <br>
                            <button class="btn btn-warning">Register</button>
                    </form>  
                </div>
            </div>
        </div>
        <div class="col col-sm-3">
        <!--  -->
        </div>
  </div>
           
        </div>
    </div>
</template>