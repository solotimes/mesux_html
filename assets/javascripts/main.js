(function( window,$,undefined ) {
	
})(window,$)

window.Geffect={
	blackMask:{
				target:$('.blackMask ul li'),
				action:'hover',
				init:function(){
						//var thisObj=this;
						//console.log(thisObj.action);
						this.target.find('.alphaBlack').stop(true,true).fadeTo(500,0.2);
						
						this.target.hover(function(){
							$(this).find('.alphaBlack').stop(true,true).fadeOut(500);
							$(this).find('span').stop(true,true).slideUp(1000);
							$(this).find('a').css('border-color','#e1e1e1');
							//$(this).find('a img').stop(true,true).animate({height:'137px',width:'206px'},300);
						},function(){
							$(this).find('.alphaBlack').stop(true,true).fadeTo(500,0.2);
							$(this).find('span').stop(true,true).slideDown(1000);
							$(this).find('a').css('border-color','#000000');
							//$(this).find('a img').stop(true,true).animate({height:'135px',width:'204px'},300);
						});
					},
				stop:function(){
					this.target.unbind(this.action);
					}
			},
	homeKv:{
				target:$('.homeKv ul li'),
				action:'click',
				init:function(){
						var thisObj=this;
						//console.log(this.target);
						this.target.click(function(){
							$(this).fadeOut();
							var nth=thisObj.target.length;
							var now=thisObj.target.index($(this));
							//console.log(nth,now);
							if(now<nth-1){
								thisObj.target.eq(now+1).fadeIn();
							}
							else{
								thisObj.target.eq(0).fadeIn();	
							}
						})
					},
				stop:function(){
					this.target.unbind(this.action);
					}
				
			},
	navflaot:{
				target:$('.navfloat .mainNav li'),
				action:'mouseenter',
				init:function(){
						var thisObj=this;
						//var $current=$('.navfloat ul li.current');
						//curLeft=$current.position().left;
						
						
						this.target.mouseenter(function(){
								var	tempLeft=$(this).position().left;
								var	thisWidth=parseInt($(this).css('width'))+40;
								
								var nowLeft=tempLeft+thisWidth/2-78;
								//console.log(tempLeft,thisWidth,nowLeft);
								$('.navfloat ul .currentNav01').stop(true,true).animate({'left':nowLeft+'px'},300);
								$('.navfloat ul .currentNav02').stop(true,true).animate({'left':nowLeft+'px'},300);
							});
						this.target.parent().mouseleave(function(){
								var	tempLeft=thisObj.target.filter('.current').position().left;
								var	thisWidth=parseInt(thisObj.target.filter('.current').css('width'))+40;
								var nowLeft=tempLeft+thisWidth/2-78;
								$('.navfloat ul .currentNav01').stop(true,true).animate({'left':nowLeft+'px'},300);
								$('.navfloat ul .currentNav02').stop(true,true).animate({'left':nowLeft+'px'},300);
							});
					},
				stop:function(){
					this.target.unbind('mouseenter');
					this.target.parent().unbind('mouseleave');
					}
			},
	siendao:{
				target:$('.siendao'),
				action:'hover',
				init:function(){
						var thisObj=this;
						this.target.hover(function(){
								$(this).children('.siendaoMenu').stop(true,true).slideDown(1500,'easeOutQuint');
								
							},function(){
								$(this).children('.siendaoMenu').stop(true,true).slideUp(1500,'easeOutQuint');
								
							});
					
					},
				stop:function(){
					this.target.unbind(this.action);
					}
			},
	musicAction:{
				target:$('.musicAction'),
				action:'click',
				init:function(){
						this.target.toggle(function(){
							$(this).html('Music off');
							$('.jp-play').click();
						},function(){
							$(this).html('Music on');
							$('.jp-stop').click();
						});
					},
				stop:function(){
					this.target.unbind(this.action);
					$('.jp-stop').click();
					}
			},
	brandHover:{
				target:$('.brandHover'),
				action:'hover',
				init:function(){
					this.target.hover(function(){
							//console.log($(this));
							var textID=$(this).attr('ehref');
							$(this).find('span').stop(true,true).slideUp(300);
							$('.brandText ul li').stop(true,true).fadeOut();
							$(textID).fadeIn(100);
						},function(){
							$(this).find('span').stop(true,true).slideDown(300);
						});
					},
				stop:function(){
						this.target.unbind(this.action);
					}
		
			},
	secondNav:{
				target:$('.mainNav'),
				action:'hover',
				init:function(){
					
					this.target.mouseenter(function(e){
								$('.secondNav').stop(true,true).slideDown(2000,'easeOutQuint');
							
						})
						
					$('.nav').mouseleave(function(){
								$('.secondNav').stop(true,true).slideUp(2000,'easeOutQuint');
							
						});
					
					},
				
				stop:function(){
						this.target.unbind(this.action);
						$('.nav').unbind('mouseleave');
					}
		
			},
	//imagepage
	leftSeason:{
				target:$('.leftSeason ul'),
				action:'hover',
				init:function(){
					this.target.find('li').animate({'bottom':'0px','opacity':'0'},200,'easeOutBounce');
					this.target.find('li').eq(0).animate({'opacity':'1'});
					var lock=false;
					
					this.target.mouseenter(function(){
							
							//console.log(1,lock);
							$(this).find('li').each(function(index,element){
								if(!lock){
									//$(this).fadeIn({duration:1000,queue:false});
									$(this).stop(false,false).animate({'bottom':24*index+'px','opacity':'1'},2000,'easeOutBounce');
								}
							});
						});
					this.target.mouseleave(function(){
							$(this).find('li').each(function(index,element){
								if(!lock){
									if(!$(this).hasClass('selected')){
										//$(this).fadeOut({duration:2000,queue:false});
										$(this).stop(false,false).animate({'bottom':0+'px','opacity':'0'},2000,'easeOutBounce');
									}
									else{
										$(this).stop(false,false).animate({'bottom':0+'px'},2000,'easeOutBounce');	
									}
								}
							});
						
						});
					this.target.find('li').click(function(){
							if(!lock){
								lock=true;
								$(this).siblings().removeClass('selected');
								$(this).addClass('selected');
								$(this).siblings().each(function(){
									$(this).stop(true,true).animate({'bottom':0+'px','opacity':'0'},2000,'easeOutBounce');
								});
								$(this).stop(true,true).animate({'bottom':0+'px'},2000,'easeOutBounce',function(){lock=false});
								return false;
							}
						});
					
					},
				stop:function(){
					this.target.find('li').each(function(index,element){
							$(this).css({'bottom':24*index+'px','opacity':'1'});
							$(this).unbind('click');
						});
					this.target.unbind('mouseleave');
					this.target.unbind('mouseenter');
					}
		
			},
	imageGallery:{
				target:$('.listMask ul'),
				action:'mouseover',
				init:function(){
					/*
					var listLock=0;
					
					$('.listMask').G_mousePosition({moveOn:$('.listMask')});
					
					$('.listMask').mousemove(function(){
						
						var hpiece=$('.listMask').height()/3
						
						if(dTop<hpiece&&dTop>0){
							listScroll('top');
						}
						else if(dTop>hpiece*2||dTop<hpiece*3){
							listScroll('bottom');
						}
						else{
							listScroll('stop');	
						}
						
						
					});
					
					function listScroll(pos){
						var lInterval=0;
						if(pos=='top'){
						
							if(!listLock){
								clearInterval(lInterval);
								var lInterval=setInterval(function(){$('.listMask ul').animate({"top": "+=148px"},2000)},2000,'linear');
								listLock=1;	
							}
						}
						else if(pos=='bottom'){
							if(!listLock){
								clearInterval(lInterval);
								var lInterval=setInterval(function(){$('.listMask ul').animate({"top": "-=148px"},2000)},2000,'linear');	
								listLock=1;
							}
							
						}else if(pos=='stop'){
							clearInterval(lInterval);
							$('.listMask ul').stop(false,false);
							listLock=0;
						}
					}
					*/
					Dslider={
						Did:'#slider',
						Dtip:'3',
						Dtime:3000,
						Dheight:148,
						Dnum:function(){
							return $(Dslider.Did).find("li").length/2;
							},
						Dslide:function(){
							var nowTop=parseInt($(Dslider.Did).css("top"));
							now=(-1)*nowTop/Dslider.Dheight;
							if(now<Dslider.Dnum()-Dslider.Dtip){
								if(!$(Dslider.Did).is(":animated")){
									$(Dslider.Did).animate({"top":(nowTop-Dslider.Dheight)+"px"},500);
									}
								}
							else{
								if(!$(Dslider.Did).is(":animated")){
									$(Dslider.Did).animate({"top":"0px"},500);
									}
								}
								
							},
						DslideDown:function(){
							var nowTop=parseInt($(Dslider.Did).css("top"));
							now=(-1)*nowTop/Dslider.Dheight;
							if(now>0){
									if(!$(Dslider.Did).is(":animated")){
										$(Dslider.Did).animate({"top":(nowTop+Dslider.Dheight)+"px"},500);
									}
								
								}
							else{
									if(!$(Dslider.Did).is(":animated")){
										$(Dslider.Did).animate({"top":(-1)*(Dslider.Dnum()-Dslider.Dtip)*Dslider.Dheight+"px"},500);
									}
								}
							
							},
						Dinterval:function(){
							intervalID=setInterval(function(){Dslider.Dslide();},Dslider.Dtime);
							//console.log(2);
							},
						DstopInterval:function(){
							 clearInterval(intervalID);
							},
						
						
						init:function(){
							$("#sliderTop").click(function(){
								Dslider.Dslide();
								return false;
								});
							$("#sliderBottom").click(function(){
								Dslider.DslideDown();
								return false;
								});
							}
						
						};
					
					
					Dslider.init();
					
					
				},
				
				stop:function(){
					this.target.unbind(this.action);
					this.target.find('.listMask').unbind('mouseover');
					}
			},
	
	imageGalleryClick:{
				target:$('.listMask ul li a'),
				action:'click',
				init:function(){
					this.target.click(function(){
						//console.log($(this).attr('dimage'));
						$('.bigImage img').fadeOut('fast').attr('src',$(this).attr('dimage')).fadeIn('fast');
						return false;
					});
				},
				stop:function(){
					this.target.unbind(this.action);
					}
			},
	collectionGallery:{
				target:$('#cslider'),
				action:'click',
				init:function(){
					
					Dslider={
						Did:'#cslider',
						Dtip:'4',
						Dtime:3000,
						Dwidth:201,
						Dnum:function(){
							return $(Dslider.Did).find("li").length;
							},
						Dslide:function(){
							var nowLeft=parseInt($(Dslider.Did).css("left"));
							now=(-1)*nowLeft/Dslider.Dwidth;
							if(now<Dslider.Dnum()-Dslider.Dtip){
								if(!$(Dslider.Did).is(":animated")){
									$(Dslider.Did).animate({"left":(nowLeft-Dslider.Dwidth)+"px"},500);
									}
								}
							else{
								if(!$(Dslider.Did).is(":animated")){
									$(Dslider.Did).animate({"left":"0px"},500);
									}
								}
								
							},
						DslideDown:function(){
							var nowLeft=parseInt($(Dslider.Did).css("left"));
							now=(-1)*nowLeft/Dslider.Dwidth;
							if(now>0){
									if(!$(Dslider.Did).is(":animated")){
										$(Dslider.Did).animate({"left":(nowLeft+Dslider.Dwidth)+"px"},500);
									}
								
								}
							else{
									if(!$(Dslider.Did).is(":animated")){
										$(Dslider.Did).animate({"left":(-1)*(Dslider.Dnum()-Dslider.Dtip)*Dslider.Dwidth+"px"},500);
									}
								}
							
							},
						Dinterval:function(){
							intervalID=setInterval(function(){Dslider.Dslide();},Dslider.Dtime);
							//console.log(2);
							},
						DstopInterval:function(){
							 clearInterval(intervalID);
							},
						
						
						init:function(){
							$("#sliderLeft").click(function(){
								Dslider.Dslide();
								return false;
								});
							$("#sliderRight").click(function(){
								Dslider.DslideDown();
								return false;
								});
							}
						
						};
					
					
					Dslider.init();
					
					
				},
				
				stop:function(){
					this.target.unbind(this.action);
					$('#sliderRight').unbind('click');
					$('#sliderLeft').unbind('click');
					}
		
			},
	collectionClick:{
				target:$('.collectionGalleryMask ul li a'),
				action:'click',
				init:function(){
					
						$('.collectionGalleryMask ul li a').fancybox({
							padding: 0,
							overlay : {
								speedOut : 0
							},
							openEffect : 'elastic',
							openSpeed  : 150,
			
							closeEffect : 'elastic',
							closeSpeed  : 150,
			
							closeClick : true,
			
							
						});
						
					
				
				},
				stop:function(){
					this.target.unbind(this.action);
					}
			},	
			
	
	
	//store
	storeGallery:{
				target:$('.storeInCity ul li'),
				action:'click',
				init:function(){
					this.target.click(function(){
						$('.store .storeImage img').fadeOut('fast').attr('src',$(this).attr('dimage')).fadeIn('fast');
						return false;
					});
						
				},
				
				stop:function(){
					this.target.unbind(this.action);
					
					}
		
			},
			
			
	
	initAll:function(){
				for(var i in this){
					//console.log(i+':'+this[i].init);
					if(this[i].init!=undefined){
						this[i].init();
					}
				}
			},
	stopAll:function(){
				for(var i in this){
					//console.log(i+':'+this[i].init);
					if(this[i].stop!=undefined){
						this[i].stop();
					}
				}
		
			}
};

$(document).ready(function(){
	
	Geffect.initAll();
});