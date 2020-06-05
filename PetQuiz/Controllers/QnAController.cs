using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PetQuiz.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetQuiz.Controllers
{
    [ApiController]
    public class QnAController : Controller
    {
        private readonly ApplicationDbContext db;

        public QnAController(ApplicationDbContext db)
        {
            this.db = db;
        }

        [HttpPost]
        [Route("/getqna")]
        public async Task<ActionResult<List<QnA>>> GetQuestions()
        {
            var rnd = new Random();
            var allQnA = await db.Questions.ToListAsync();
            var FiveQnA = allQnA.OrderBy(qna => rnd.Next()).Take(5).ToList();

            return Ok(FiveQnA);
        }
    }
}
