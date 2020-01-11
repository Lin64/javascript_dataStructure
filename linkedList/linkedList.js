function linkedList(){
    //内置类，Node类
    function node(data){
        this.data = data;
        this.next = null;
    }
    //属性
    this.head = null;
    this.length = 0;
    //方法
    linkedList.prototype.append = function(data){
        var newNode = new node(data);
        if(this.length === 0){
            this.head = newNode
        }else{
            var current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }
    linkedList.prototype.insert = function(position,data){
        var newNode = new node(data);
        var current = this.head;
        if(position > this.length + 1){
            return false;
        }
        if(position === 1){
            newNode.next = this.head;
            this.head = newNode; 
        }else{
            while(position > 2){
                current = current.next;
                position--;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        this.length++;
    }
    linkedList.prototype.get = function(position){
        var current = this.head;
        var headPos = 1;
        while(current.next){
            if(headPos == position){
                return current;
            }else{
                current = current.next;
                headPos++;
            }
        }
        return false;
    }
    linkedList.prototype.indexOf = function(data){
        var current = this.head;
        var count = 1;
        while(current.next){
            if(current.data == data){
                return count;
            }else{
                current = current.next;
                count++;
            }
        }
        return -1;
    }
    linkedList.prototype.updata = function(position,newData){
        var changeNode = this.get(position);
        changeNode.data = newData;
    }
    linkedList.prototype.removeAt = function(position){
        var current = this.head;
        if(position > this.length + 1){
            return false;
        }
        if(position === 1){
            this.head = current;
        }else{
            while(position > 2){
                current = current.next;
                position--;
            }
           current.next = current.next.next;
        }
        this.length--;
    }
    linkedList.prototype.remove = function(data){
        var current = this.head;
        var before = current;
        while(current.next){
            if(current.data == data){
                before.next = current.next;
                this.length--;
                return true;
            }else{
                before = current;
                current = current.next;
            }
        }
        return false;
    }
    linkedList.prototype.isEmpty = function(){
        return this.length == 0;
    }
    linkedList.prototype.size = function(){
        return this.length;
    }
    linkedList.prototype.toString = function(){
        var current = this.head;
        var result = '';
        while(current){
            result += current.data + '  '; 
            current = current.next;
        }
        return result;
    }
}
var linkedList1 = new linkedList();
for(let i = 1; i < 11; i++){
    linkedList1.append(i);
}
linkedList1.insert(4,3.4);
linkedList1.insert(1,0);
linkedList1.insert(13,11);
console.log('第三位是：',linkedList1.get(3));
console.log('数据为10的节点在第：',linkedList1.indexOf(10),'位');
console.log(linkedList1.toString());
console.log('更新第五位的数据为7.7',linkedList1.updata(5,7.7));
console.log(linkedList1.toString());
console.log('删除第五位数据',linkedList1.removeAt(5));
console.log(linkedList1.toString());
console.log('删除节点数据为9的节点',linkedList1.remove(9));
console.log(linkedList1.toString());