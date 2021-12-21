// Define our labelmap
const labelMap = {
   // 0:{name:'zero', color:'white'},
    1:{name:'target1', color:'red'},
    2:{name:'target2', color:'yellow'},
    3:{name:'target3', color:'lime'},
    4:{name:'target4', color:'blue'},
    5:{name:'target5', color:'green'},
    6:{name:'error', color:'white'},
}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            console.log(classes)
            console.log(i)
            console.log(text)
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/2);
            ctx.stroke()
        }
    }
}