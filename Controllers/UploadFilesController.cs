using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using klaas.Models;
using klaas.products;
using System;

namespace Controllers
{
    public class UploadFilesController : Controller
    {
         private readonly WebshopContext _context;

        public UploadFilesController  (WebshopContext context) {
            _context = context;
        }

        public IActionResult index()
        {
            return View();
        }
        #region snippet1
        [HttpPost("UploadFiles")]
        public async Task<IActionResult> index(IFormFile files)
        {
            string content = files.ContentType;

            // full path to file in temp location
            var filePath = Path.GetTempFileName();

            
                if (files.Length > 0)
                {
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await files.CopyToAsync(stream);
                    }
                }
            
            // process uploaded files
            // Don't rely on or trust the FileName property without validation.
             string output = "done";
            FileStream fileStream = new FileStream(filePath, FileMode.Open);
                using (StreamReader reader = new StreamReader(fileStream))
                {
                   
                        string line;
                        // Read and display lines from the file until the end of 
                        // the file is reached.
                        while ((line = reader.ReadLine()) != null) 
                        {
                            string[] record = line.Split(';');
                                Products m = new Products
                                {
                                    Title = record[0],
                                    Price = Convert.ToDouble(record[1])
                                };
                            _context.Products.Add(m);
                        }
                    _context.SaveChanges();
                    }
                
            ViewData["Message"] = output;
            return View();
        }
        #endregion
    }
}