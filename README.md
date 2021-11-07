
<h1>An Image Gallery</h1>
<div class="container">
<div class="item red">
	<img src="https://preview.ibb.co/gQbzQ5/colt_steele_firemarshall.jpg"/>
	<i class="fa fa-camera"></i>
</div>

<div class="item blue">
	<img src="http:i.imgur.com/AhCfhrF.jpg"/>
	<i class="fa fa-paw"></i>
</div>

<div class="item green">
	<img src="http://preview.ibb.co/kd9Esk/colt_steele_smugglerscave.jpg"/>
	<i class="fa fa-cloud"></i>
</div>
  
  </div>



@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
@import url('https://fonts.googleapis.com/css?family=Raleway:200');

h1 {
  text-align: center;
  font-family: Raleway;
  color: #34495e;
}
.container {
  display: flex;
  justify-content: center;
}


div.item {
  position: relative;
  float: left;
  overflow: hidden;
  margin: 10px 1%;
  min-width: 220px;
  max-width: 310px;
  width: 100%;
  background: #000000;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}

div.item * {
  box-sizing: border-box;
}

div.item img {
  max-width: 100%;
  vertical-align: top;
  height: 210px;
}

div.item i {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  font-size: 34px;
  color: #000000;
  width: 60px;
  height: 60px;
  line-height: 60px;
  background: #ffffff;
}

div.item a {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
}

div.item.blue {
  background-color: #34495e;
}
div.item.blue i {
  color: #34495e;
}
div.item.red {
  background-color: #e74c3c;
}
div.item.red i {
  color: #e74c3c;
}

div.item.green {
  background-color: #16a085;
}
div.item.green i {
  color: #16a085;
}

