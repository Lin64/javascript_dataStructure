function BinarySearchTree(){

    function Node(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }

    this.root = null;

    BinarySearchTree.prototype.insert = function(key){
        if(arguments[0] instanceof Array){
            for(let i = 0; i < arguments[0].length; i++){
                this.insert(arguments[0][i]);
            }
            return ;
        }

        var newNode = new Node(key);
        var current = this.root;                                                                                                                                                            
        var before = current;
        if(this.root == null){
            this.root = newNode;
        }else{
            while(current){
                before = current;
                if(newNode.key < current.key){
                    current = current.left;
                }else{
                    current = current.right;
                }
            }
            if(newNode.key < before.key){
                before.left = newNode;
            }else{
                before.right = newNode;
            }
        }
    }
    // 先序遍历
    BinarySearchTree.prototype.preorderTraversal = function(){
        var current = this.root;
        if(current){
            var resultArr = [];
            var stackArr = [current];
            while(stackArr.length){
                current = stackArr.shift();
                if(current.left){
                    stackArr.push(current.left);
                }
                if(current.right){
                    stackArr.push(current.right);
                }
                resultArr.push(current.key);
            }
            return resultArr;
        }
    }
    //中序遍历
    BinarySearchTree.prototype.inorderTraversal = function(){
        var current = this.root;
        if(current){
            var resultArr = [];
            var stackArr = [];
            while(current || stackArr.length){
                while(current){
                    stackArr.push(current);
                    current = current.left;
                }
                if(stackArr.length){
                    current = stackArr.pop();
                    resultArr.push(current.key);
                    current = current.right;
                }
            }
            return resultArr;
        }
    }
     //后序遍历
     BinarySearchTree.prototype.postorderTraversal = function(){
        var current = this.root;
        var flag = false;
        var rightTag = null;    //记录有孩子是否有或者是否已经访问过
        var resultArr = [];
        var stackArr = [];
        do{
            while(current){
                stackArr.push(current);
                current = current.left;
            }
            flag = true;
            while(flag && stackArr.length){   
                current = stackArr[stackArr.length-1];  
                if(current.right == rightTag || current.right == null){     // 右孩子访问过或者没有右孩子
                    resultArr.push(stackArr.pop().key);
                    rightTag = current;     // 标记已经访问过的右孩子
                }else{
                    current = current.right;
                    flag = false;
                }
            }
        }while(stackArr.length);
        return resultArr;
    }
    // 查找最小值
    BinarySearchTree.prototype.getMinNode = function(){
        var current = this.root;
        while(current.left){
            current = current.left;
        }
        return current.key;
    }
    // 查找最大值
    BinarySearchTree.prototype.getMaxNode = function(){
        var current = this.root;
        while(current.right){
            current = current.right;
        }
        return current.key;
    }
    // 查找某个值
    BinarySearchTree.prototype.getValueNode = function(value){
        let current = this.root;
        while(current){
            if(value > current.key){
                current = current.right;
            }else if(value < current.key){
                current = current.left;
            }else{
                return current;
            }
        }
        return false;
    }
    // 删除某个节点
    BinarySearchTree.prototype.delValueNode = function(value){
        let current = this.root;
        let before = null;
        // 查找删除节点
        while(current){         
            if(value > current.key){
                before = current;
                current = current.right;
            }else if(value < current.key){
                before = current;
                current = current.left;
            }else{
                break;
            }
            
        }
        if(!current){
            return false;
        }

        let delLeft = current.left;     // 记录删除节点的左子树
        console.log(delLeft);
        
        // 删除节点
        if(current.key < this.root.key){    // 如果删除的节点是根节点的左子树
            if(current.right){      // 如果删除的节点存在右子树，则将右子树提到删除节点的位置，然后一直向左遍历到最后一个节点，将删除的节点的左子树放在此处
                current = current.right;
                before.left = current;       
                while(current.left){
                    current = current.left;
                }
                current.left = delLeft;
            }else{                  // 如果不存在右子树，则直接将左子树提到右子树就可以了
                before.left =  delLeft;
            }
        }else if(current.key > this.root.key){  // 如果删除的节点是根节点右子树
            if(current.right){      // 如果删除的节点存在右子树，则将右子树提到删除节点的位置，然后一直向左遍历到最后一个节点，将删除的节点的左子树放在此处
                current = current.right;
                before.right = current;       
                while(current.left){
                    current = current.left;
                }
                current.left = delLeft;
            }else{                  // 如果不存在右子树，则直接将左子树提到右子树就可以了
                before.right =  delLeft;
            }
        }else{  // 如果删除节点是根节点，则直接将根节点置为空即可
            if(current.right){      // 如果删除的节点存在右子树，则将右子树提到删除节点的位置，然后一直向左遍历到最后一个节点，将删除的节点的左子树放在此处
                this.root = current.right;
                while(current.left){
                    current = current.left;
                }
                current.left = delLeft;
            }else{                  // 如果不存在右子树，则直接将左子树提到右子树就可以了
                this.root =  delLeft;
            }
        }
    }
}
var {log} = console;
var binarySearchTree = new BinarySearchTree;
var data = [];
// for(let i = 0; i < 9; i++){
//     data.push( Math.floor(Math.random()*100+1) );
//     binarySearchTree.insert(data[i]);
// }
// data.push(50);
// binarySearchTree.insert(50);
// log(data);
// log(binarySearchTree.preorderTraversal());
// log(binarySearchTree.inorderTraversal());
// log(binarySearchTree.postorderTraversal());
// log(binarySearchTree.getMaxNode());
// log(binarySearchTree.getMinNode());
// log(binarySearchTree.getValueNode(50));

{
// binarySearchTree.insert(11);
// binarySearchTree.insert(7);
// binarySearchTree.insert(15);
// binarySearchTree.insert(5);
// binarySearchTree.insert(9);
// binarySearchTree.insert(13);
// binarySearchTree.insert(20);
// binarySearchTree.insert(3);
// binarySearchTree.insert(6);
// binarySearchTree.insert(8);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// binarySearchTree.insert(14);
// binarySearchTree.insert(18);
// binarySearchTree.insert(25);
}
binarySearchTree.insert([11,7,15,5,9,13,20,3,6,8,10,12,14,18,25,30,11,60]);

binarySearchTree.delValueNode();
log(binarySearchTree.preorderTraversal());
