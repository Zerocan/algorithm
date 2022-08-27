import java.util.HashMap;
public class LRUBaseHashTable<K, V> {
	// 默认链表容量
	private final static Integer DEFAULT_CAPACITY = 10;
	
	// 头结点
	private DNode<K, V> headNode;
	
	// 尾结点
	private DNode<K, V> tailNode;
	
	// 链表长度
	private Integer length;
	
	// 链表容量
	private Integer capacity;
	
	// 散列表存储key
	private HashMap<K, DNode<K, V>> table;
	
	// 双向链表
	static class DNode<K, V> {
		private K key;
		private V value;
		
		// 前驱指针
		private DNode<K, V> prev;
		
		// 后继指针
		private DNode<K, V> next;
		
	    DNode() {}
	
		DNode(K key, V value) {
			this.key = key;
			this.value = value;
		}
	}
	
	
	public LRUBaseHashTable(int capacity) {
		this.length = 0;	
		this.capacity = capacity;
		
		headNode = new DNode<>();
		tailNode = new DNode<>();
		
		headNode.next = tailNode;
        tailNode.prev = headNode;
		
		table = new HashMap<>();
	}
	
	public LRUBaseHashTable(){
		this(DEFAULT_CAPACITY);
	}
	
	public void add(K key, V value) {
		DNode<K, V> node = table.get(key);
        if (node == null) {
            DNode<K, V> newNode = new DNode<>(key, value);
            table.put(key, newNode);
            addNode(newNode);

            if (++length > capacity) {
                DNode<K, V> tail = popTail();
                table.remove(tail.key);
                length--;
            }
        } else {
            node.value = value;
            moveToHead(node);
        }
	}

    // 将新节点加到头部
    public void addNode(DNode<K, V> newNode) {
        newNode.next = headNode.next;
        newNode.prev = headNode;

        headNode.next.prev = newNode;
        headNode.next = newNode;
    }

    // 弹出尾部数据节点
    private DNode<K, V> popTail() {
        DNode<K, V> node = tailNode.prev;
        removeNode(node);
        return node;
    }

    // 移除节点
    private void removeNode(DNode<K, V> node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // 将节点移动到头部
    private void moveToHead(DNode<K, V> node) {
        removeNode(node);
        addNode(node);
    }
	
    // 获取节点数据
    public V get(K key) {
        DNode<K, V> node = table.get(key);
        if (node == null) {
            return null;
        }

        moveToHead(node);
        return node.value;
    }

    // 移除节点数据
    public void remove(K key) {
        DNode<K, V> node = table.get(key);
        if (node == null) {
            return;
        }
        removeNode(node);
        length--;
        table.remove(node.key);
    }

    private void printAll() {
        DNode<K, V> node = headNode.next;
        while (node.next != null) {
            System.out.print("key:" + node.key + ", value: " + node.value);
            node = node.next;
            System.out.println();
        }
    }

    public static void main(String[] args) {
       LRUBaseHashTable<Character, String> lru = new LRUBaseHashTable<>(5);
       lru.add('1', "11");
       lru.add('2', "22");
       lru.add('3', "33");
       lru.add('4', "44");
       lru.add('5', "55");
       lru.add('6', "66");
       lru.printAll();
       System.out.print("key 1:" + lru.get('1'));
       System.out.println();
       System.out.print("key 2:" + lru.get('2'));
       System.out.println();
       lru.remove('3');
       lru.printAll();
    }
}