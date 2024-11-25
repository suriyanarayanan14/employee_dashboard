// Search employees by any input
app.get('/api/employees/search', async (req, res) => {
    const { query } = req.query; // Get the query from the request
  
    try {
      // Find employees where the query matches any field
      const employees = await Employee.find({
        $or: [
          { name: { $regex: query, $options: 'i' } }, // Case-insensitive match
          { email: { $regex: query, $options: 'i' } },
          { department: { $regex: query, $options: 'i' } }
        ]
      });
  
      res.status(200).json(employees); // Return the matching employees
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error searching employees' });
    }
  });
  