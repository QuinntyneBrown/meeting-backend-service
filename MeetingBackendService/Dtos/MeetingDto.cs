namespace MeetingBackendService.Dtos
{
    public class MeetingDto
    {
        public MeetingDto(MeetingBackendService.Models.Meeting entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public MeetingDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
