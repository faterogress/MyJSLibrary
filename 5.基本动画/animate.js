/*		此JS包含三个方法:
		1.animate动画
		五个参数分别为   元素 属性 目标 时长 回调
		属性只支持 位置 宽高 
		其中回调中this为animate中的运动元素
		2.
		3.getCss(元素,属性)获得CSS属性	
		*/
		function animate(ele,attr,target,duration,callback){
			clearInterval(ele.timer)
			var time=0;
			var interval=15;
			var begin=getCss(ele,attr)||0;
			var change=target-begin;
			function step(){
				time+=interval;
				if(time<duration){
					ele.style[attr]=begin+change*interval/duration+"px"
					begin=parseFloat(ele.style[attr]);
					
				}else{
					clearInterval(ele.timer)
					ele.style[attr]=target+"px";
					callback&&callback.call(ele);
				}
			}
			ele.timer=setInterval(step,interval)
		}
		function getCss(ele,attr){
			if(window.getComputedStyle){
				return parseFloat(getComputedStyle(ele)[attr])
			}else{
				return parseFloat(ele.currentStyle[attr])
			}
		}
/*		动画注意三点
		1.到了边界要清setInterval
		2.浮点数要修正终点
		3.动画积累*/


		//------------------------------------------------------
		//减速运动 . 加速减速什么的都是纸老虎,只改一行公式,看图片
		function toSlow(ele,attr,target,during){
			clearInterval(ele.timer)
			var begin=parseFloat(getComputedStyle(ele)[attr])||0;
			var road=(target-begin);
			var interval=15;
			var time=0; 
			console.log(begin)
			console.log(begin)
			function pass(){
				time+=interval;
				if(time<during){
					ele.style[attr]=begin+Math.pow((time/during),.5)*road+"px";
					// begin=parseFloat(ele.style[attr]);
				}else{
					ele.style[attr]=target+"px"
					clearInterval(ele.timer)
				}
			}
			ele.timer=setInterval(pass,interval);
		}
		//------------------------------------------------------