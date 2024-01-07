
const express = require('express');

const app = express();

app.use(express.urlencoded());

app.get('/', function(request, response, next){

	response.send(`
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
		<div class="row">
                    <div class="col-lg-8">
                        <div class="ttm-bgcolor-white p-40 padding_top35 border-rad_5 margin_top15">
                            <form id="request_qoute_form" class="request_qoute_form wrap-form clearfix" method="post" novalidate="novalidate">
                                <div class="row">
                                    <div class="col-md-6">
                                        <span class="text-input"><input name="name" type="text" value="" placeholder="Your Name*" required="required"></span>
                                    </div>
                                    <div class="col-md-6">
                                        <span class="text-input"><input name="address" type="text" value="" placeholder="Your Email*" required="required"></span>
                                    </div>
                                    <div class="col-md-6">
                                        <span class="text-input"><input name="phone" type="text" value="" placeholder="Phone Number*" required="required"></span>
                                    </div>
                                    <div class="col-md-6">
                                        <span class="text-input"><input name="subject" type="text" value="" placeholder="Subject*" required="required"></span>
                                    </div>
                                    <div class="col-lg-12">
                                        <span class="text-input"><textarea name="message" rows="5" placeholder="Message" required="required"></textarea></span>
                                    </div>
                                    <div class="col-lg-12" style="display: flex; justify-content:center">
                                        <button class="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor  margin_top5"  type="submit">Send now!</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="ttm-bgcolor-white p-30 border-rad_5 margin_top15">
                            <!--featured-icon-box-->
                            <div class="featured-icon-box icon-align-top-content margin_top0 margin_bottom25">
                                <div class="featured-icon">
                                    <div class="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg"> 
                                        <i class="flaticon-email"></i>
                                    </div>
                                </div>
                                <div class="featured-content pt-2">
                                    <div class="featured-title">
                                        <h3 class="margin_bottom0 fs-20">Let’s Call or Email</h3>
                                    </div>
                                    <div class="featured-desc">panchtatvaa.ent@gmail.com<br>+91-8141111204</div>
                                </div>
                            </div><!-- featured-icon-box end-->
                            <!--featured-icon-box-->
                            <div class="featured-icon-box icon-align-top-content margin_bottom25">
                                <div class="featured-icon">
                                    <div class="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg"> 
                                        <i class="flaticon-address"></i>
                                    </div>
                                </div>
                                <div class="featured-content pt-2">
                                    <div class="featured-title">
                                        <h3 class="margin_bottom0 fs-20">Location</h3>
                                    </div>
                                    <div class="featured-desc">A - 648, SWC Hub, Nr. Essar Petrol Pump, Vasna - Bhayli Road, Vadodara - 391410 </div>
                                </div>
                            </div><!-- featured-icon-box end-->
                            <!--featured-icon-box-->
                            <div class="featured-icon-box icon-align-top-content margin_bottom10">
                                <div class="featured-icon">

                                </div>
                                <div class="featured-content pt-2">
                                </div>
                            </div><!-- featured-icon-box end-->
                        </div>
                    </div>
                </div>
	`);


});

app.post('/', function(request, response, next){

	response.send(request.body);

});

app.listen(2000);
