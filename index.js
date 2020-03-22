// Your code here

class Shape {
    constructor(side_arr){
        this.side_arr = side_arr
    }

    get countSides(){
        return this.side_arr.length
    }

    get perimeter(){
        return this.side_arr.reduce((sum,e) => sum + e, 0)
    }
}

class Polygon extends Shape{
}

class Triangle extends Shape{
    get isValid(){
        let arr = [...this.side_arr]
        let c = Math.max(...this.side_arr)
        arr.splice(arr.indexOf(c),1)
        return arr[0] + arr[1] > c ? true : false
    }
}

class Square extends Shape{
    get area(){
        return this.side_arr[0] ** 2
    }

    get isValid() {
        return this.side_arr.filter((e,i) => this.side_arr.indexOf(e) === i).length === 1 ? true : false 
    }
}