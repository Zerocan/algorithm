import java.util.HashMap;
public class LRUBaseHashTable<K, V> {
	// Ĭ����������
	private final static Integer DEFAULT_CAPACITY = 10;
	
	// ͷ���
	private DNode<K, V> headNode;
	
	// β���
	private DNode<K, V> tailNode;
	
	// ������
	private Integer length;
	
	// ��������
	private Integer capacity;
	
	// ɢ�б�洢key
	private HashMap<K, DNode<K, V>> table;
	
	// ˫������
	static class DNode<K, V> {
		private K key;
		private V value;
		
		// ǰ��ָ��
		private DNode<K, V> prev;
		
		// ���ָ��
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

    // ���½ڵ�ӵ�ͷ��
    public void addNode(DNode<K, V> newNode) {
        newNode.next = headNode.next;
        newNode.prev = headNode;

        headNode.next.prev = newNode;
        headNode.next = newNode;
    }

    // ����β�����ݽڵ�
    private DNode<K, V> popTail() {
        DNode<K, V> node = tailNode.prev;
        removeNode(node);
        return node;
    }

    // �Ƴ��ڵ�
    private void removeNode(DNode<K, V> node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // ���ڵ��ƶ���ͷ��
    private void moveToHead(DNode<K, V> node) {
        removeNode(node);
        addNode(node);
    }
	
    // ��ȡ�ڵ�����
    public V get(K key) {
        DNode<K, V> node = table.get(key);
        if (node == null) {
            return null;
        }

        moveToHead(node);
        return node.value;
    }

    // �Ƴ��ڵ�����
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