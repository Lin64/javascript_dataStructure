function doublyLinkedList(){
    //内部类 节点类
    function Node(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
    //属性
    this.head = null;
    this.tail = null;
    this.length = 0;
    //方法
    doublyLinkedList.prototype.append = function(data){
        var newNode = new Node(data);
        if(!this.length){
            this.head = this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }
    doublyLinkedList.prototype.insert = function(position,data){
        var newNode = new Node(data);
        var current = this.head;
        if(position > this.length + 1){
            return false;
        }
        if(position === 1){
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.head = newNode; 
        }else if(position == this.length){
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }else{
            if(position == this.length + 1){
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }else{
                while(position > 2){
                    current = current.next;
                    position--;
                }
                current.next.prev = newNode;
                newNode.next = current.next;
                current.next = newNode;
                newNode.prev = current;
            }
        }
        this.length++;
    }
    doublyLinkedList.prototype.get= function(position){
        if(position > this.length){
            return false;
        }else if(position == 1){
            return this.head;
        }else if(position == this.length){
            return this.tail;
        }
        var current = this.head.next;
        var count = 2;
        while(current){
            if(position == count){
                return current;
            }
            current = current.next;
            count++;
        }
        return false;
    }
    doublyLinkedList.prototype.indexOf = function(data){
        var current = this.head;
        var count = 1;
        while(current){
            if(current.data == data){
                return count;
            }
            current = current.next;
            count++;
        }
        return false;
    }
    doublyLinkedList.prototype.updata = function(position,newData){
        var changeNode = this.get(position);
        if(changeNode){
            changeNode.data = newData;
        }else{
            return false;
        }
    }
    doublyLinkedList.prototype.removeAt = function(position){
        var delNode = this.get(position);
        if(delNode){
            delNode.prev.next = delNode.next;
            delNode.next.prev = delNode.prev;
        }else{
            return false;
        }
    }
    doublyLinkedList.prototype.remove = function(data){
       var current = this.head;
       while(current){
           if(current.data == data){
            current.prev.next = current.next;
            current.next.prev = current.prev;
            return true;
           }
           current = current.next;
       }
       return false;
    }
    doublyLinkedList.prototype.isEmpty = function(){
        return this.length == 0;
    }
    doublyLinkedList.prototype.toString = function(){
        var current = this.head;
        var result = '';
        while(current){
            result += current.data + '  '; 
            current = current.next;
        }
        return result;
    } 
}
var {log} = console;
var doublyLinkedList1 = new doublyLinkedList();
for(let i = 1; i < 11; i++){
    doublyLinkedList1.append(i);
}
log(doublyLinkedList1.toString());
doublyLinkedList1.insert(1,0);
doublyLinkedList1.insert(12,12);
doublyLinkedList1.insert(5,3.3);
log(doublyLinkedList1.toString());

log(doublyLinkedList1.get(1));
log(doublyLinkedList1.get(12));
log(doublyLinkedList1.get(9));
log(doublyLinkedList1.indexOf(3));
log(doublyLinkedList1.indexOf(6));
log(doublyLinkedList1.toString());

doublyLinkedList1.updata(2,3.3);
doublyLinkedList1.updata(4,5.5);
log(doublyLinkedList1.toString());

doublyLinkedList1.removeAt(2);
doublyLinkedList1.removeAt(4);
log(doublyLinkedList1.toString());

doublyLinkedList1.remove(2);
doublyLinkedList1.remove(30);
log(doublyLinkedList1.toString());
