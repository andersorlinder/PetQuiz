using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using PetQuiz.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace PetQuiz.Controllers
{
    [ApiController]
    public class HighScoreController : Controller
    {
        private readonly ApplicationDbContext db;

        public HighScoreController(ApplicationDbContext db)
        {
            this.db = db;
        }

        [HttpPost]
        [Route("/score")]
        public async Task<IActionResult> PostScore([FromBody] HighScoreRequest request)
        {
            HighScore highscore = new HighScore
            {
                NickName = request.Username,
                Score = request.Score,
                TimePlayed = DateTime.Now
            };
            db.HighScores.Add(highscore);
            int result = await db.SaveChangesAsync();
            if (result > 0)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet]
        [Route("/highscores")]
        public async Task<ActionResult<String>> GetHighScores()
        {
            var userScore = await db.HighScores
                .OrderByDescending(m => m.Score)
                .ThenBy(m => m.TimePlayed)
                .ToListAsync();
            var jsonRespons = JsonConvert.SerializeObject(userScore);
            return Ok(jsonRespons);
        }

    }
}
