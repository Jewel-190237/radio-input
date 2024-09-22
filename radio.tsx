const [value, setValue] = useState('Credit Card');




<Radio.Group className='grid grid-cols-1 text-[16px] font-poppins border' onChange={e => setValue(e.target.value)} value={value}>
    {['Credit Card', 'PayPal'].map((method, idx) => (
        <Radio key={idx} className='p-4 border-[#D9D9D9] border-b w-full' value={method}>{method}</Radio>
    ))}
</Radio.Group>